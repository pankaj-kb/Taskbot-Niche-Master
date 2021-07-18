require('dotenv').config()
console.log(process.env);
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;
const fetch = require("node-fetch")
const client = new TelegramBot(token, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})
client.on('message', async (message) => {
    const { chat, text, from } = message
    switch (true) {
        case (text == '🧠💭  Send Some Insight' || text == 'send some insight'): {
            fetch('https://randomquotesbot.herokuapp.com/').then(res => res.text()).then(text => {
            try{
             setTimeout(async() => {
                let c = await client.sendPhoto(chat.id, text)
                console.log(c)
            })
                
} catch (err) {
console.log(err)
}
            });
        }
        break;
    }
})