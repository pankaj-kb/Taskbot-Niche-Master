// var greet = "hi";
// if (msg.text.toString().toLowerCase().includes(greet) || msg.text.toString().toLowerCase().includes("hello") || msg.text.toString().toLowerCase().includes("hey") ) {
// bot.sendMessage(msg.chat.id,"hey !! "+ msg.from.first_name);
// }
// var bye = "bye";
// if (msg.text.toString().toLowerCase().includes(bye) || msg.text.toString().toLowerCase().includes("see yaa")) {
//     bot.sendMessage(msg.chat.id, " bye !! " + msg.from.first_name + " Do Something Great");
// }
// var formality = "how are you";
// if (msg.text.toString().toLowerCase().includes(formality) || msg.text.toString().toLowerCase().includes("how are you ?")) {
//     bot.sendMessage(msg.chat.id, "I am having great time , Just Like a 🤖");
// }

// var appreciate = "thanks";
// if (msg.text.toString().toLowerCase().includes(appreciate) || msg.text.toString().toLowerCase().includes("well done") || msg.text.toString().toLowerCase().includes("♥")) {
//     bot.sendMessage(msg.chat.id, "Its a Pleasure ♥");
// }
// var appreciate2 = "good job";
// if (msg.text.toString().toLowerCase().includes(appreciate2)){
//     bot.sendMessage(msg.chat.id, "Its a Pleasure ♥");
// }
// var ok = "ok";
// if (msg.text.toString().toLowerCase().includes(ok) || msg.text.toString().toLowerCase().includes("👍")){
//     bot.sendMessage(msg.chat.id, "👍");
// }
// var hehe = "hehe";
// if (msg.text.toString().toLowerCase().includes(hehe)){
//     bot.sendMessage(msg.chat.id, "😉");
// }
// var viewTasks = "view tasks";
// if (msg.text.toString().toLowerCase().includes(viewTasks)){
//     bot.sendMessage(msg.chat.id, "Feature is Upcoming");
// }
// var setupTasks = "set-up tasks";
// if (msg.text.toString().toLowerCase().includes(setupTasks)){
//     bot.sendMessage(msg.chat.id, "Feature is Upcoming");
// }
// var accomplitioments = "recent accomplitioments";
// if (msg.text.toString().toLowerCase().includes(accomplitioments)){
//     bot.sendMessage(msg.chat.id, "Feature is Upcoming");
// }
// })
// bot.onText(/\/start/, (msg) => {
//     bot.sendMessage(msg.chat.id, "Gear Up " + msg.from.first_name + " Lets Get Productive", {
//         'reply_markup': {
//             'keyboard': [['📝 View Tasks', '✍ Set-Up Tasks'], ['🏆 Recent Accomplitioments'], ['🧠💭 Lessons']],
//             resize_keyboard: true,
//             one_time_keyboard: true,
//             force_reply: true,
//         }

//     });
    
//  });


switch (true) {
    case text == ".":
        {
            const fs = require("fs");
            fs.readFile("./test.txt", "utf8", (err, part1) => {
                let file = part1.split('\r')
                console.log(file)
                let c = client.sendMessage(chat.id, file[0]);
            });
        }
        break;
}