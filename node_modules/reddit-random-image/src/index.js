import fetch from 'node-fetch';
import randomItem from 'random-item';

class RedditRandomImage {
	cached = {};
	cache = true;

	async getJson (reddit, {limit, sort}) {
		const response = await fetch(`https://www.reddit.com/r/${reddit}/${sort}.json?limit=${limit}`);
		const {data} = await response.json();

		return data;
	}

	filterPosts (posts) {
		const domainre = /imgur|gfycat|tenor|giphy|tumblr|gifbin|imgflip|gif|jpe?g|png/i;
		const filter = function (post) {
			const hint = post.data.post_hint;
			const domain = post.data.domain;

			return hint === 'image' || (hint === 'link' && domainre.test(domain));
		};
		return posts.filter(filter);
	}

	extractUrls (posts) {
		return posts.map(post => post.data.url);
	}

	buildSearchHash (reddit, limit, sort) {
		return `${reddit}_${limit}_${sort}`;
	}

	isSearchCached (hash) {
		return this.cached[hash] && this.cached[hash].length > 0;
	}

	getRandomFromCache (hash) {
		const array = this.cached[hash];
		const item = this.getRandomFromArray(array);

		this.cached[hash] = array.filter(i => i !== item);

		return item;
	}

	getRandomFromArray (array) {
		return randomItem(array);
	}

	async fetchUrls (reddit, options = {}) {
		const {limit, sort} = options;
		const data = await this.getJson(reddit, {limit, sort});
		const posts = this.filterPosts(data.children);
		const urls = this.extractUrls(posts);

		if (this.cache) {
			const searchHash = this.buildSearchHash(reddit, limit, sort);
			this.cached[searchHash] = urls;
		}

		return urls;
	}

	async get (reddit = 'cats', options = {}) {
		const {limit = 100, sort = 'new'} = options;

		if (limit > 100 || limit < 0) {
			throw new Error('"limit" must be between 1 and 100');
		}
		if (!['new', 'hot', 'top'].includes(sort)) {
			throw new Error('"sort" must be one of: "new", "hot", "top"');
		}

		const searchHash = this.buildSearchHash(reddit, limit, sort);

		if (this.cache && this.isSearchCached(searchHash)) {
			return this.getRandomFromCache(searchHash);
		}

		const urls = await this.fetchUrls(reddit, {limit, sort});

		if (this.cache) {
			return this.getRandomFromCache(searchHash);
		}
		return this.getRandomFromArray(urls);
	}
}

const searcher = new RedditRandomImage();

export default searcher.get.bind(searcher);
export {searcher, RedditRandomImage};
