const TelegramBot = require('node-telegram-bot-api');
const token = '1704591105:AAHTflbnxoQjj-kcsqwfE1Rui9--6AU3gyw';
const bot = new TelegramBot(token, {polling: true});
const express = require('express')
const bodyParser = require('body-parser');
 
const app = express();
 
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
        bot.sendMessage(msg.chat.id, "Do Something great " + msg.from.first_name);
    }
    var formality = "how are you";
    if (msg.text.toString().toLowerCase().includes(formality) || msg.text.toString().toLowerCase().includes("how are you ?")) {
        bot.sendMessage(msg.chat.id, "I am good , Just Like a Bot");
    }

    var appreciate = "thanks";
        if (msg.text.includes(appreciate) || msg.text.toString().toLowerCase().includes("well done") || msg.text.toString().toLowerCase().indexOf("good job") === 0) {
            bot.sendMessage(msg.chat.id, "Its a Pleasure ✌");
        }

    });
   
    bot.onText(/\/start/, (msg) => {

        bot.sendMessage(msg.chat.id,"ok "+ msg.from.first_name + " Lets Get Productive", {
            "reply_markup": {
                "keyboard": [["View Tasks", "Set-Up Tasks"],   ["Recent Accomplitioments"]]
                }
            });
            
            });
            