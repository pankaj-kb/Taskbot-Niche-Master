// var quotes = require('./quotes');
// var child_process = require('child_process');
// child_process.exec('node quotes.js', (error, stdout, stderr) => {
//     console.log(`${stdout}`);
//     console.log(`${stderr}`);
//     if (error !== null) {
//         console.log(`exec error: ${error}`);
//     }
// });
const {PythonShell} = require('python-shell');

let pyshell = new PythonShell('insight.py');

  pyshell.on('message', function(insight) {
  console.log(insight);
})

pyshell.end(function (err) {
  if (err){
    throw err;
  };
});
