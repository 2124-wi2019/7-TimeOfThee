/*
Timothy Washington
washington_a07b.js
INFO 2124 - Javascript I
Thoendel
Creation date: Feb 2, 2020
*/
/* DO NOT MODIFY CODE BETWEEN THESE LINES */
const standardInput = process.stdin;            
standardInput.resume();
standardInput.setEncoding('utf8');
const badFoods = [];
const groceryItems = [];
clearScreen();
console.log(getPrompt(groceryItems));
/* DO NOT MODIFY CODE BETWEEN THESE LINES */

//Step 1
buildFoodsList (badFoods, "bread", "beer", "egg1","egg2","egg3");        

standardInput.on('data', function (text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    //Step 4 Begin
    clearScreen();
    if(text.toLowerCase()=="q"){//check for bail
        console.log("Bye");
        process.exit();
    }else if(text.toLowerCase()=="v"){
        console.log(displayList(groceryItems));
        console.log(getPrompt(groceryItems));
    }else{
        if(!checkItem(text,badFoods)){//adds to list
            groceryItems.push(formatItem(text));
            console.log("Item added");
            console.log(getPrompt(groceryItems));
        }else{//screams
            console.log("I don't like that item, choose another.\n");
            console.log(getPrompt(groceryItems));
        }
    }
    //Step 4 End
});

/* DEFINE YOUR FUNCTIONS BETWEEN THIS LINE */

//Step 2
function buildFoodsList(list,...food){//makes list
    for(var a of food){
        list.push(a);
    }
    return list;
}
function getPrompt(list){//prints text
    return `Your grocery list contains ${list.length} items
Please enter a grocery item.
Enter Q to quit
Enter V to view list
=======================`;
}
//Step 3
function checkItem(item,food){//checks item for pickyness
    for(var a of food){
        if(item.toLowerCase()==a.toLowerCase())return true;
    }
    return false;
}
function formatItem(item){//formats
    var ret=item.trim();
    if(ret.length<2)return ret.toUpperCase();
    ret=ret.charAt(0).toUpperCase()+ret.substring(1).toLowerCase();
    return ret;
}
function displayList(list){//prints list
    let ret = `Grocery List (${list.length} items)
===========`;
    for(var a=0;a<list.length;a++){
        ret+="\n"+(a+1)+"] "+list[a];
    }
    return ret;
}
/* AND THIS LINE */

function clearScreen() {
    console.log('\033[2J');
}