
//this is single line comment
/* this
is a multiline 
commment*/

//variables
var a;//vaeriable declaretion
a=10;// variable initilisation
var b= 11; //declaration +initialization

//data types

var num =100;
console.log("num:",num);
console.log("type of num:", typeof num);

var str1 ="hello world";
console.log("str1:",str1);
console.log("type of(str1):", typeof(str1));

var bool1=true;
var bool2= false;
console.log("typesof(bool1):",typeof bool1);


var error = null;
console.log("typeof(error): " ,typeof error);
var error1 = undefined;
console.log("typeof(error1): " ,typeof error1);





console.log("\n\n\n\n");

let str ="hello,world";
//String methods

let strLength = str . length;
console.log('length :' ,strLength);
console.log('uppercase :', str.toUpperCase());
console.log('lowercase :',str.toLocaleLowerCase());
console.log('chaining methods :' , str.toUpperCase().toLocaleLowerCase().toLocaleLowerCase().toUpperCase());
console.log('startsWith :' , str.startsWith('h'))
console.log('endsWith :' , str.endsWith('d'))


let leftTrimmedValue= str.trimStart();
console.log("leftTrimmedValue :",leftTrimmedValue);
console.log('leftTrimmed String length : ',leftTrimmedValue.length);

let rightTrimmedValue = str.trimEnd();
console.log("rightTrimmedValue :",rightTrimmedValue);
console.log('rightTrimmed String length :', leftTrimmedValue.length);

let trimmedValue = str.trim();
console.log ("trimmedvalue :", trimmedValue);
console.log('trimmedValue string length :',trimmedValue.length);

let repalceValue =str.replace('Hello','hai');
console.log("replaceValue:",  repalceValue);


console.log("\n\n\n\n");

//String are immutable
console.log('str :', str);

let spliterStr =str.split(',');
console.log(" spliterStr :",spliterStr);
 
let joinStr =spliterStr.join(',');
console.log(" joinStr :",joinStr);



console.log("\n\n\n\n");

// array

let x = 10;
let arr=[10,20,30,40,50];
console.log("arr :",arr);
console.log("typeof arr :" , typeof arr);


console.log("arr length", arr.length);
console.log('arr[0]', arr[0]);

arr[0] = 15 ;
console.log("arr:",arr);

arr.push("last");
console.log("arr",arr);

arr.unshift("First");
console.log("arr : ",arr);

arr.pop();
console.log("arr pop",arr);

arr.shift();
console.log("arr pop",arr);

arr.splice(1,3);
console.log("arr ",arr);

arr.splice(1,0,20);
console.log("arr ",arr);


console.log("\n\n\n\n");
// objects

let obj ={
    firstname : "anu",
    lastname : "nelson",
    age  : 10,
    address: {
        city: 'my city',
        street : 'my street',
    },
    canadian: true,
    hobbies : ['gamming','reading','books'],

}
console.log('obj :',obj)
obj.mark1=90;
console.log("obj : ",obj);



let json_obj = JSON.stringify(obj);
console.log("json_obj :", JSON);
console.log("typeof obj : ",typeof obj);
console.log("firstname :", json_obj.firstname);



let parsed_json_obj =JSON.parse(json_obj);
console.log("parsed_json_obj :" ,parsed_json_obj);


console.log("\n\n\n\n");

//operation

{

    let num = 100;
    console.log("num :", num);

    let num1=100;
    let result1=++num1;//pre increment
    console.log("result1 :", result1)

    let num2=100;
    let result2 = --num2;//pre decrement
    console.log("result2 :", result2)

    //post increment num5++
    //post decrement num5--

}

{
    let num1='100';
    let num2 =100;
    
    let result1= num1==num2;
    console.log("result :" , result1);

    let result2= num1==num2;
    console.log("result :" , result2);
}
console.log("\n\n\n\n")

//switch statements

let day =1;

switch(day){
    case 1 :
        console.log("monday");
        break;

    case 2 :
        console.log("tue");
        break;

    case 3 :
        console.log("wnd");
        break;
    
    case "sunday" :
        console.log("sunday");
        break;
    default :
        console.log("invalid value");
        break;

}


console.log("\n\n\n\n\n")

//Dom

let text = document.getElementById('text');
console.log("text :",text);

let text_content = text.textContent;
console.log("text_content :",text_content);

text.textContent ="this is from javascript" //change the correspondin html element



let container= document.getElementsByClassName('container');
console.log("container :" ,container);

// let container1= container[0];
// console.log("container1 : ",container1);





//time function

setTimeout(function(){
    console.log("this is from setTimeout")
},5000);

// setInterval(function (){
//     console.log("intervals")
// },5000);


//program to print cuurent time

function putZero(value){
    return value <10 ? "0"+value:value;

}

function show(){
    let dt = new Date();
    console.log("dt :",dt);

    let hours = dt.getHours();
    console.log("hours :", hours)

    let ampm = hours <12 ? "am" :"pm";
    console.log("ampm :",ampm);

    let time= document.getElementById('time');
    console.log("time :",time);
    
    time.innerHTML = putZero(hours) + ":" + putZero(dt.getMinutes())+":" +putZero(dt.getSeconds())

    // setTimeout (show,1000);
}
show();

console.log("\n\n\n\n\n\n")

//event Handling
let btn = document.getElementById('btn');
console.log("btn :",btn);

btn.addEventListener ('click',function(){
    console.log("Button cliked....");
});

btn.addEventListener('mouseover',function(){
    console.log("mouseover event fired");
})

btn.addEventListener('mouseout',function(){
    console.log("mouseout event fired");
})

btn.addEventListener('mousedown',function(){
    console.log("mousedown event fired");
})
btn.addEventListener('mouseup',function(){
    console.log("mouseup event fired");
})

btn.addEventListener('mousemove',function(){
    console.log("mousemove event fired");
})

let input =document.getElementById('a');
console.log("input:",input);

input.addEventListener('keydown',function(){
    console.log("keydown events fired ");
});

input.addEventListener('keyup',function(){
    console.log("keyup events fired ");
});



let bttn = document.getElementById('bttn');
console.log("bttn :",bttn);

function changeColor(color){
    document.body.style.backgroundColor=color;
}
function bttn2 (){
    changeColor('red');
    bttn2.innerHTML="background color changed";
}
    











