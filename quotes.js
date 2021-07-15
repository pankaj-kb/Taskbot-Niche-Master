var fs = require("fs");
var naval = [];
function getRandomNaval()
{
    return naval[Math.floor(Math.random()*naval.length)];
}
function indexOf(arr, item)
{
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i].inspiration === item)
        {
            return i;
        }
    }
    return -1;
}
function arrayContains(arr, item)
{
    return indexOf(arr, item) != -1;
}
function remove(arr, item)
{
    var index = indexOf(arr, item);
    arr.splice(index, 1);
}
function nameToIndex(arr, name)
{
    return indexOf(arr, name);
}
function iterateLinkedList(head, func)
{
    if (head == null)
    {
        return;
    }
    if (head.next == null)
    {
        func(head);
        return;
    }
    var temp = head.next;
    while(temp.id != head.id)
    {
        func(temp);
        temp = temp.next;
    }
}
function printLinkedList(head)
{
    if (head == null)
    {
        return;
    }
    if (head.next == null)
    {
        console.log(head.inspiration);
        return;
    }
    var temp = head.next;
    while(temp.id != head.id)
    {
        console.log(temp.inspiration);
        temp = temp.next;
    }
}
function getNamesFromLinkedList(head)
{
    
}
function addToLinkedList(head, elem)
{
    if (head == null)
    {
        head = elem;
        head.next = null;
    }
    else if (head.next == null)
    {
        head.next = elem;
        elem.next = head;
    }
    else
    {
        var temp = head.next;
        while (temp.id != head.id)
        {            
            temp = temp.next;
            alert("in loop");
            console.log("in loop");
        }
        temp.next = elem;
        elem.next = head;
    }
}
var id = 0;
function getID()
{
    return id++;
}
class Socket
{
    constructor()
    {
        this.id = getID();
        this.next = null;
        this.inspiration = getRandomNaval();
    }
}

var socketlist = [];
var socketlisthead = null;

fs.readFile('naval.txt', function(err, data)
{
    if (err) throw err;
    naval = data.toString().split("\n");
    start();
});
function start()
{
    var currentnewsocket = new Socket();

    //userlist.push(currentnewsocket);
    //listhead = currentnewsocket;

    //addToLinkedList(listhead, currentnewsocket);
    //printLinkedList(listhead);

    //console.log(listhead.inspiration);
    console.log(`${currentnewsocket.inspiration}`);
}