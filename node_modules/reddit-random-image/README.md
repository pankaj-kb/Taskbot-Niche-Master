# reddit-random-image
Get a random image form a given reddit

## Install

```bash
npm install reddit-random-image
```

## Usage

```js
import search from 'reddit-random-image';

(async function () {
	for (var i = 0; i < 10; i++) {
		const image = await search('CatGifs');
		console.log(image);
	}
})();
```
