require('dotenv').config()
console.log(process.env);
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, {polling: true});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {PythonShell} = require('python-shell');
var pyshell = new PythonShell('insight.py');
var test={};
pyshell.on('message', function(inspire) {
    console.log(inspire);
    test=inspire;
});
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
    var hehe = "hehe";
    if (msg.text.toString().toLowerCase().includes(hehe) || msg.text.toString().toLowerCase().includes("😉")){
        bot.sendMessage(msg.chat.id, "😉");
    }
    var sendme = "sendme";
    if (msg.text.toString().toLowerCase().includes(sendme)){
        bot.sendMessage(msg.chat.id, test );
    }

    let count = 0;
setInterval(
  () =>
    require("node-fetch")(process.env.URL).then(() =>
      console.log(`[${++count}] here i pinged ${process.env.URL}`)
    ),
  280000
);
    });
    
    bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "ok " + msg.from.first_name + " Lets Get Productive", {
        'reply_markup': {
            'keyboard': [['View Tasks', 'Set-Up Tasks'], ['Recent Accomplitioments'], ['Send Me']],
            resize_keyboard: true,
            one_time_keyboard: true,
            force_reply: true,
        }

    });
    
 });