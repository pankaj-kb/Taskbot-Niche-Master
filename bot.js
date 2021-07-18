require('dotenv').config()
console.log(process.env);
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;
const fetch = require("node-fetch")
const bot = new TelegramBot(token, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})
bot.on('message', async (msg) => {
    const { chat, text, from } = msg
    switch (true) {
        case (text == '🧠💭 Send Some Insight' || text == 'send some insight'): {
            fetch('https://randomquotesbot.herokuapp.com/').then(res => res.text()).then(text => {
            try{
             setTimeout(async() => {
                let c = await bot.sendPhoto(chat.id, text)
                console.log(c)
            })
                
} catch (err) {
console.log(err)
}
            });
        }
        break;
    }
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
    if (msg.text.toString().toLowerCase().includes(hehe)){
        bot.sendMessage(msg.chat.id, "😉");
    }
    var viewTasks = "View Tasks";
    if (msg.text.toString().toLowerCase().includes(viewTasks)){
        bot.sendMessage(msg.chat.id, "Feature is Upcoming");
    }
    var setupTasks = "Set-Up Tasks";
    if (msg.text.toString().toLowerCase().includes(setupTasks)){
        bot.sendMessage(msg.chat.id, "Feature is Upcoming");
    }
  var rAccomplitioments = "Recent Accomplitioments";
    if (msg.text.toString().toLowerCase().includes(rAccomplitioments)){
        bot.sendMessage(msg.chat.id, "Feature is Upcoming");
    }
})
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Gear Up " + msg.from.first_name + " Lets Get Productive", {
        'reply_markup': {
            'keyboard': [['📝 View Tasks', '✍ Set-Up Tasks'], ['🏆 Recent Accomplitioments'], ['🧠💭 Send Some Insight']],
            resize_keyboard: true,
            one_time_keyboard: true,
            force_reply: true,
        }

    });
    
 });