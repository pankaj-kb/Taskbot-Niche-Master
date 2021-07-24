// // switch (true) {
// //     case (text == '🧠💭 Lessons' || text == 'Lessons'): {
// //         fetch('https://randomquotesbot.herokuapp.com/naval').then(res => res.text()).then(text => {
// //         try{
// //          setTimeout(async() => {
// //             let c = await bot.sendPhoto(chat.id, text)
// //             console.log(c)
// //         })
            
// // } catch (err) {
// // console.log(err)
// // }
// //         });
// //     }
// //     break;
// // }
// const TelegramBot = require('node-telegram-bot-api');
// const fetch = require('node-fetch');
// const client = new TelegramBot(TOKEN, {
//     polling: {
//         interval: 300,
//         autoStart: true,
//         params: {
//             timeout: 10
//         }
//     }
// })
// client.on('message', async (message) => {
//     const { chat, text, from } = message
//     switch (true) {
//         case (text == '.'): {
//             fetch('https://randomquotesbot.herokuapp.com/').then(res => res.text()).then(text => {
//             try{
// let c = await client.sendMessage(chat.id, text)
// console.log(c)
// } catch (err) {
// console.log(err)
// }
//             });
//         }
//         break;
//     }
// })




