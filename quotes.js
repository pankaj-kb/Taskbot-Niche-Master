let inspi = await fetch(/txt/)
inspi.get('txt/messages.txt', function(txt) {
    var lines = txt.responseText.split("\n");
    var randLineNum = Math.floor(Math.random() * lines.length);
    return lines[randLineNum]; // random line from the text file
    })