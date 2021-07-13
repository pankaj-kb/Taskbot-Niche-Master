const TelegramBot = require('node-telegram-bot-api');
const token = '1704591105:AAHTflbnxoQjj-kcsqwfE1Rui9--6AU3gyw';
const bot = new TelegramBot(token, {polling: true});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

app.use(bodyParser.json());
 
app.listen(process.env.PORT);
 
app.post('/' + bot.token, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});
     
bot.on('message', (msg) => {

    var greet = "hi";
    if (msg.text.toString().toLowerCase().includes(greet) || msg.text.toString().toLowerCase().includes("hello") || msg.text.toString().toLowerCase().includes("hey") ) {
    bot.sendMessage(msg.chat.id,"hey !! "+ msg.from.first_name);
    }
    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye) || msg.text.toString().toLowerCase().includes("see yaa")) {
        bot.sendMessage(msg.chat.id, " bye !! " + msg.from.first_name + " Do Something Great");
    }
    var formality = "how are you";
    if (msg.text.toString().toLowerCase().includes(formality) || msg.text.toString().toLowerCase().includes("how are you ?")) {
        bot.sendMessage(msg.chat.id, "I am having great time , Just Like a 🤖");
    }

    var appreciate = "thanks";
    if (msg.text.toString().toLowerCase().includes(appreciate) || msg.text.toString().toLowerCase().includes("well done") || msg.text.toString().toLowerCase().includes("♥")) {
        bot.sendMessage(msg.chat.id, "Its a Pleasure ♥");
    }
    var appreciate2 = "good job";
    if (msg.text.toString().toLowerCase().includes(appreciate2)){
        bot.sendMessage(msg.chat.id, "Its a Pleasure ♥");
    }
    var ok = "ok";
    if (msg.text.toString().toLowerCase().includes(ok) || msg.text.toString().toLowerCase().includes("👍")){
        bot.sendMessage(msg.chat.id, "👍");
    }
    
    var photo = "send me something";
    if (msg.text.toString().toLowerCase().includes(photo)){
        bot.sendPhoto(msg.chat.id, "https://images.unsplash.com/photo-1624676431060-92c75a3eb218?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0b2ljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
    }
  
    });
    bot.onText(/\/start/, (msg) => {

        bot.sendMessage(msg.chat.id,"ok "+ msg.from.first_name + " Lets Get Productive", {
            "reply_markup": {
                "keyboard": [["View Tasks", "Set-Up Tasks"],["Recent Accomplitioments"],["send me something"]]
                }
            });
   
    bot.on(/^\/imageof (.+)$/, (msg, props) => {
        request(`https://unsplash.com/search/photos/${props.match[1]}`, function (error, response) { // Get the search results of bing
            var html = new JSDOM(response.body); // Parse the response 
            var images = html.window.document.getElementsByClassName('_2zEKz'); // Get all images - in this case by class name, otherwise we would get profile pictures too
            var sources = []; // Array to pick random url from
            for (var i = 0; i < images.length; i++) { // Loop through all images and push only valid url to the array
                if (images[i].src.includes('https')) {
                    sources.push(images[i].src);
                }
            }
            // Check if the array containing the url has any values
            if (typeof sources[0] !== "undefined") {
                sendPhoto(msg, sources[Math.floor(Math.random() * sources.length)]); // Random url as parmeter
            } else {
                sendError(msg, props);
            }
        });
    });
    
    // Actual function to send the photo
    const sendPhoto = (msg, url) => msg.reply.photo(url); // Send the photo
});