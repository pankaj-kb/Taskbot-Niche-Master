require("dotenv").config();
console.log(process.env);
const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TELEGRAM_TOKEN;
const fetch = require("node-fetch");
const bot = new TelegramBot(token, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
});

// Authors Quote Section Begins here.
bot.on("message", async msg => {
  const { chat, text, from } = msg;
  switch (true) {
    case text == "Naval Ravikant":
      {
        fetch("https://randomquotesbot.herokuapp.com/naval")
          .then(res => res.text())
          .then(text => {
            try {
              setTimeout(async () => {
                let c = await bot.sendMessage(chat.id, text);
                console.log(c);
              });
            } catch (err) {
              console.log(err);
            }
          });
      }
      break;
    case text == "Nassim Taleb":
      {
        fetch("https://randomquotesbot.herokuapp.com/nntaleb")
          .then(res => res.text())
          .then(text => {
            try {
              setTimeout(async () => {
                let c = await bot.sendMessage(chat.id, text);
                console.log(c);
              });
            } catch (err) {
              console.log(err);
            }
          });
      }
      break;
    case text == "Marcus Aurelius":
      {
        fetch("https://randomquotesbot.herokuapp.com/marcus")
          .then(res => res.text())
          .then(text => {
            try {
              setTimeout(async () => {
                let c = await bot.sendMessage(chat.id, text);
                console.log(c);
              });
            } catch (err) {
              console.log(err);
            }
          });
      }
      break;

    case text == "Rabindranath Tagore":
      {
        fetch("https://randomquotesbot.herokuapp.com/rtagore")
          .then(res => res.text())
          .then(text => {
            try {
              setTimeout(async () => {
                let c = await bot.sendMessage(chat.id, text);
                console.log(c);
              });
            } catch (err) {
              console.log(err);
            }
          });
      }
      break;

    case text == "Chanakya":
      {
        fetch("https://randomquotesbot.herokuapp.com/chanakya")
          .then(res => res.text())
          .then(text => {
            try {
              setTimeout(async () => {
                let c = await bot.sendMessage(chat.id, text);
                console.log(c);
              });
            } catch (err) {
              console.log(err);
            }
          });
      }
      break;

    case text == "Kapil Gupta":
      {
        fetch("https://randomquotesbot.herokuapp.com/kapilgupta")
          .then(res => res.text())
          .then(text => {
            try {
              setTimeout(async () => {
                let c = await bot.sendMessage(chat.id, text);
                console.log(c);
              });
            } catch (err) {
              console.log(err);
            }
          });
      }
      break;

    case text == "Seneca":
      {
        fetch("https://randomquotesbot.herokuapp.com/seneca")
          .then(res => res.text())
          .then(text => {
            try {
              setTimeout(async () => {
                let c = await bot.sendMessage(chat.id, text);
                console.log(c);
              });
            } catch (err) {
              console.log(err);
            }
          });
      }
      break;

    case text == "Socrates":
      {
        fetch("https://randomquotesbot.herokuapp.com/socrates")
          .then(res => res.text())
          .then(text => {
            try {
              setTimeout(async () => {
                let c = await bot.sendMessage(chat.id, text);
                console.log(c);
              });
            } catch (err) {
              console.log(err);
            }
          });
      }
      break;

    case text == "Swami Vivekanand":
      {
        fetch("https://randomquotesbot.herokuapp.com/swamiv")
          .then(res => res.text())
          .then(text => {
            try {
              setTimeout(async () => {
                let c = await bot.sendMessage(chat.id, text);
                console.log(c);
              });
            } catch (err) {
              console.log(err);
            }
          });
      }
      break;
  }
});

//Start Message Here.
bot.onText(/\/start/, msg => {
  bot.sendMessage(
    msg.chat.id,
    "Gear Up " + msg.from.first_name + " Lets Get Productive",
    {
      reply_markup: {
        keyboard: [["🧠💭 Lessons"]],
        resize_keyboard: true,
        one_time_keyboard: true,
        force_reply: true
      }
    }
  );
});

// 1st Menu
bot.onText(/🧠💭 Lessons/, msg => {
  bot.sendMessage(msg.chat.id, "From Who You Want To Learn ?", {
    reply_markup: {
      keyboard: [["💡 Philosopher", "👔 Personalities"]],
      resize_keyboard: true,
      one_time_keyboard: true,
      force_reply: true
    }
  });
});

// Philosopher Menu

bot.onText(/💡 Philosopher/, msg => {
  bot.sendMessage(msg.chat.id, "Choose Your Guru", {
    reply_markup: {
      keyboard: [
        ["Chanakya", "Seneca", "Marcus Aurelius"],
        ["Socrates", "Swami Vivekanand", "Rabindranath Tagore"]
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
      force_reply: true
    }
  });
});

// Personalities Menu

bot.onText(/👔 Personalities/, msg => {
  bot.sendMessage(msg.chat.id, "Choose Your Guru", {
    reply_markup: {
      keyboard: [["Kapil Gupta", "Naval Ravikant", "Nassim Taleb"]],
      resize_keyboard: true,
      one_time_keyboard: true,
      force_reply: true
    }
  });
});
