const TelegramBot = require('node-telegram-bot-api');
const token = '1704591105:AAHTflbnxoQjj-kcsqwfE1Rui9--6AU3gyw';
const bot = new TelegramBot(token, {polling: true});
        

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
        bot.sendMessage(msg.chat.id, "I am good , Just Like a Bot ");
    }

    var appreciate = "thanks" | "good job";
        if (msg.text.includes(appreciate)) {
            bot.sendMessage(msg.chat.id, "Its a Pleasure " + msg.from.first_name);
        }
    
    });
   
    bot.onText(/\/start/, (msg) => {

        bot.sendMessage(msg.chat.id, msg.from.first_name + " Ok Lets Get Productive", {
            "reply_markup": {
                "keyboard": [["View Tasks", "Set-Up Tasks"],   ["Recent Accomplitioments"]]
                }
            });
            
            });
                        

