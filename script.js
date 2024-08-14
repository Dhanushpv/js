
// //this is single line comment
// /* this
// is a multiline 
// commment*/

// //variables
// var a;//vaeriable declaretion
// a=10;// variable initilisation
// var b= 11; //declaration +initialization

// //data types

// var num =100;
// console.log("num:",num);
// console.log("type of num:", typeof num);

// var str1 ="hello world";
// console.log("str1:",str1);
// console.log("type of(str1):", typeof(str1));

// var bool1=true;
// var bool2= false;
// console.log("typesof(bool1):",typeof bool1);


// var error = null;
// console.log("typeof(error): " ,typeof error);
// var error1 = undefined;
// console.log("typeof(error1): " ,typeof error1);





// console.log("\n\n\n\n");

// let str ="hello,world";
// //String methods

// let strLength = str . length;
// console.log('length :' ,strLength);
// console.log('uppercase :', str.toUpperCase());
// console.log('lowercase :',str.toLocaleLowerCase());
// console.log('chaining methods :' , str.toUpperCase().toLocaleLowerCase().toLocaleLowerCase().toUpperCase());
// console.log('startsWith :' , str.startsWith('h'))
// console.log('endsWith :' , str.endsWith('d'))


// let leftTrimmedValue= str.trimStart();
// console.log("leftTrimmedValue :",leftTrimmedValue);
// console.log('leftTrimmed String length : ',leftTrimmedValue.length);

// let rightTrimmedValue = str.trimEnd();
// console.log("rightTrimmedValue :",rightTrimmedValue);
// console.log('rightTrimmed String length :', leftTrimmedValue.length);

// let trimmedValue = str.trim();
// console.log ("trimmedvalue :", trimmedValue);
// console.log('trimmedValue string length :',trimmedValue.length);

// let repalceValue =str.replace('Hello','hai');
// console.log("replaceValue:",  repalceValue);


// console.log("\n\n\n\n");

// //String are immutable
// console.log('str :', str);

// let spliterStr =str.split(',');
// console.log(" spliterStr :",spliterStr);
 
// let joinStr =spliterStr.join(',');
// console.log(" joinStr :",joinStr);



// console.log("\n\n\n\n");

// // array

// let x = 10;
// let arr=[10,20,30,40,50];
// console.log("arr :",arr);
// console.log("typeof arr :" , typeof arr);


// console.log("arr length", arr.length);
// console.log('arr[0]', arr[0]);

// arr[0] = 15 ;
// console.log("arr:",arr);

// arr.push("last");
// console.log("arr",arr);

// arr.unshift("First");
// console.log("arr : ",arr);

// arr.pop();
// console.log("arr pop",arr);

// arr.shift();
// console.log("arr pop",arr);

// arr.splice(1,3);
// console.log("arr ",arr);

// arr.splice(1,0,20);
// console.log("arr ",arr);


// console.log("\n\n\n\n");
// // objects

// let obj ={
//     firstname : "anu",
//     lastname : "nelson",
//     age  : 10,
//     address: {
//         city: 'my city',
//         street : 'my street',
//     },
//     canadian: true,
//     hobbies : ['gamming','reading','books'],

// }
// console.log('obj :',obj)
// obj.mark1=90;
// console.log("obj : ",obj);



// let json_obj = JSON.stringify(obj);
// console.log("json_obj :", JSON);
// console.log("typeof obj : ",typeof obj);
// console.log("firstname :", json_obj.firstname);



// let parsed_json_obj =JSON.parse(json_obj);
// console.log("parsed_json_obj :" ,parsed_json_obj);


// console.log("\n\n\n\n");

// //operation

// {

//     let num = 100;
//     console.log("num :", num);

//     let num1=100;
//     let result1=++num1;//pre increment
//     console.log("result1 :", result1)

//     let num2=100;
//     let result2 = --num2;//pre decrement
//     console.log("result2 :", result2)

//     //post increment num5++
//     //post decrement num5--

// }

// {
//     let num1='100';
//     let num2 =100;
    
//     let result1= num1==num2;
//     console.log("result :" , result1);

//     let result2= num1==num2;
//     console.log("result :" , result2);
// }
// console.log("\n\n\n\n")

// //switch statements

// let day =1;

// switch(day){
//     case 1 :
//         console.log("monday");
//         break;

//     case 2 :
//         console.log("tue");
//         break;

//     case 3 :
//         console.log("wnd");
//         break;
    
//     case "sunday" :
//         console.log("sunday");
//         break;
//     default :
//         console.log("invalid value");
//         break;

// }


// console.log("\n\n\n\n\n")

// //Dom

// let text = document.getElementById('text');
// console.log("text :",text);

// let text_content = text.textContent;
// console.log("text_content :",text_content);

// text.textContent ="this is from javascript" //change the correspondin html element



// let container= document.getElementsByClassName('container');
// console.log("container :" ,container);

// // let container1= container[0];
// // console.log("container1 : ",container1);

// console.log("\n\n\n\n\n\n math function")

// //math function 

// console.log(Math.sqrt(16));//4
// console.log(Math.round(11.4))//11
// console.log(Math.round(11.5))//12
// console.log(Math.floor(12.4))//12
// console.log(Math.floor(12.9))//12
// console.log(Math.ceil(13.9))//14
// console.log(Math.ceil(13.1))//14
// console.log(Math.abs(10))//10
// console.log(Math.abs(-10))
// console.log(Math.PI)
// console.log(Math.max(10,20,30))
// console.log(Math.min(10,20,30))
// console.log(Math.pow(2,3))

// console.log("\n\n\n\n\n\n")
// //time function

// setTimeout(function(){
//     console.log("this is from setTimeout")
// },5000);

// // setInterval(function (){
// //     console.log("intervals")
// // },5000);


// //program to print cuurent time

// function putZero(value){
//     return value <10 ? "0"+value:value;

// }

// function show(){
//     let dt = new Date();
//     console.log("dt :",dt);

//     let hours = dt.getHours();
//     console.log("hours :", hours)

//     let ampm = hours <12 ? "am" :"pm";
//     console.log("ampm :",ampm);

//     let time= document.getElementById('time');
//     console.log("time :",time);
    
//     time.innerHTML = putZero(hours) + ":" + putZero(dt.getMinutes())+":" +putZero(dt.getSeconds())

//     // setTimeout (show,1000);
// }
// show();

// console.log("\n\n\n\n\n\n")

// //event Handling
// let btn = document.getElementById('btn');
// console.log("btn :",btn);

// btn.addEventListener ('click',function(){
//     console.log("Button cliked....");
// });

// btn.addEventListener('mouseover',function(){
//     console.log("mouseover event fired");
// })

// btn.addEventListener('mouseout',function(){
//     console.log("mouseout event fired");
// })

// btn.addEventListener('mousedown',function(){
//     console.log("mousedown event fired");
// })
// btn.addEventListener('mouseup',function(){
//     console.log("mouseup event fired");
// })

// btn.addEventListener('mousemove',function(){
//     console.log("mousemove event fired");
// })

// let input =document.getElementById('a');
// console.log("input:",input);

// input.addEventListener('keydown',function(){
//     console.log("keydown events fired ");
// });

// input.addEventListener('keyup',function(){
//     console.log("keyup events fired ");
// });



// let bttn = document.getElementById('bttn');
// console.log("bttn :",bttn);

// function changeColor(color){
//     document.body.style.backgroundColor=color;
// }
// function bttn2 (){
//     changeColor('red');
//     bttn2.innerHTML="background color changed";
// }



//     //spread operator

//     console.log("\n\n\n\n\n\n");

//     let arr3=[1,2,3,4,5];
//     console.log("arr3 :",arr3);

//     let arr6=[...arr3,6];
//     console.log("arr6 :",arr6);

//     let obj1 ={
//         name: "john",
//         email:"john@gmail.com",
//     }
//     console.log("obj1:",obj1)

// {
//     let obj2={...obj1, addd:"myaddres"}
//     console.log("obj2:",obj2)
// }


// //destructing

// let [aa,bb,cc,dd,ee]= arr3;
// console.log("a :" ,aa);
// console.log("b :",bb);
// console.log("c :", ee);

// let {email,name}=obj1;
// console.log("name :" ,name);
// console.log("email",email);

// // nested destructing

// let matrix =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];
// console.log("matrix :",matrix);
// // let [a,b,c]

// let[row1,row2,[g,h,i],] =matrix;
// console.log("row1",row1);
// console.log("row2",row2);
// console.log("row3",g,h,i);

// let [a1,b1,c] =row1;
// console.log("a:",1);
// console.log("b1:",b1);
// console.log("c:",c);


// let data={
//     name1:"dhanu",
//     email1:"danu@email.com",
//     address:{
//         city: "mycity",
//         street:"mystreet",
//         pincode:"12345"

//     }
// }

// let {name1, email1, address :{city,street,pincode}}= data;
// console.log("name :",name1);
// console.log("email :",email1);
// console.log("address :",city,street,pincode);

// console.log("\n\n\n\n\n")

// //array methods

// let arr11=[10,20,30,40,50];
// let result15=arr11.forEach((item) => {     
//     console.log("item :",item);
//     return item 
// });

// //for each
// console.log("result15 :",result15);//undefined

// let result111=arr11.find((item) =>{
//     return item <30;
// });
// console.log("result1:",result111);

// let result222=arr11.filter((item) =>{
//     return item >30;
// });
// console.log("result12:",result222);

// let result333=arr11.map((item) =>{
//     return item +2;
// });
// console.log("result13:",result333);


// let result4=arr11.reduce((item,total) =>{
//     return  total+ item ;
// });
// console.log("result13:",result4);
// console.log('\n\n\n\n')

// const people =[
//     {name2: 'Alice', age: 30 , city: 'New york'},
//     {name2: 'Bob', age: 25 , city: 'Los Angels'},
//     {name2: 'charlie', age: 35 , city: 'chicago'},
//     {name2: 'David', age: 30 , city: 'New york'},
//     {name2: 'Eve', age: 28 , city: 'Los Angels'},
// ]

// //for each
// //name to uppercase
// people.forEach(n => {
//     console.log("name :",n.name2.toUpperCase());
// });
// console.log('\n\n\n\n')

// // city
// people.forEach(n => {
//     console.log("city :",n.city);
// });

// console.log('\n\n\n\n')
// //age
// let nre = people.forEach(n => {
//     console.log("age",n.age+5)

// });
// console.log("age:",nre);


// // find


// // const minAge = Math.min(...people.map(person => person.age));

// // const youngest = people.find(person => person.age === minAge);
// // console.log("The youngest person is:", youngest.name2, "with age", youngest.age);

// let result1111=arr11.find((item) =>{
//     return item >30;
// });
// console.log("result1:",result1111);console.log("\n\n\n\n");
// // console.log("this :", this);

// let obj3 ={
//     name3 : "mark",
//     email3 : "mark@gmail.com",
//     age: 30,
//     printAge : function (){
//         console.log(" started.......");
//         console.log("this" ,this);
//         console.log("age" ,this.age);
//         return "Function exicution completed"
//     }

// }



// {


//     console.log("obj :",obj3);


//     console.log("\n\n\n");
//     console.log("obj :",obj3.name3);


//     console.log("\n\n\n");
//     console.log("obj :",obj3.email3);


//     console.log("\n\n\n");
//     console.log("obj :",obj3.printAge());


//     console.log("\n\n\n\n\n\n");

//     function greet( message1,message2){
//         console.log("message1 :", message1);
//         console.log("message2 :", message2);

//         console.log("this :", this);
//         console.log("name :", this.name3);

//     }
//     // greet("Hello","Hai");
//     // greet.call(obj,"Hello","Hai");
//     let output = greet.bind(obj,"Hello","Hai");
//     console.log("output : ",output);
//     output();
// }
   


// //constructor function 

// function person(name3,age,mark){
//     this.name3=name3;
//     this.age=age;
//     this.mark=mark;
//     this.greeting =function () {
//         console.log(`Hai ${this.name3} ,your are ${this.age} years old`);
//     }
// }
// let person1 = new person("henrry",55,100);
// console.log("person1 :",person1);
// person1.greeting();

// let person2 = new person("babu",35,50);
// console.log("person1 :",person1);
// person2.greeting();

// // Update individual object

// person1.address = "thissur";
// console.log("person1 :",person1);

// person2.address ="kochi";
// console.log("person2 :",person2)




// person.prototype.getMark =function (){
//     console.log(`hi ${this.name3} ,your mark is ${this.mark}`);
// }
// person1.getMark();
// person2.getMark();



// // //Using classes

// class Person {
//     name5;
//     age;
//     mark;
    

//     constructor(name5,age,mark){
//         this.name5 =name5;
//         this.age=age;
//         this.mark=mark;
//     }


//     greeting() {
//         console.log(`hello ${this.name5}, your age is ${this.age} and your mark is ${this.mark}`);
//     }
// }
// let Person5 =new Person ("john",12,70);
// console.log("person1",Person5);
// Person5.greeting();




// console.log("\n\n\n\n\n\n")

// class Animal{
//     name;
//     constructor(name){
//         this.name=name;
//     }
//     walking(){
//         console.log (`${this.name} is walking.`);
//     }
// }
// class Dog extends Animal{
//     color;
//     constructor(name,color){
//         super(name);//super ketword is used to access the parent class (class animal)
//         this.color=color;
//     }
//     walking(){
//         console.log (`my ${this.color} coloured ${this.name} is running`);
//     }
// }
// let dog1 =new Dog ("tommy","brown")
// dog1.walking();



// console.log("\n\n\n\n\n\n")
// class Button{
//     button;

//     constructor(content){
//         this.button =document.createElement('button')    
//         this.button.innerHTML=content; 
//         document.body.appendChild(this.button)  
//     }
//     set width(width){

//         this.button.style.width =width + "px"
//     }
//     set height(height){

//         this.button.style.height =height + "px"
//     }
//     get width (){
//         return this.button.style.width
//     }
//     get height (){
//         return this.button.style.height
//     }
//     onClick(fn){
//         this.button.onclick=fn;
//     }
// }
// let button1 =new Button ('click to go');
// console.log("button 1:", button1); 

// button1.width =200;
// button1.height=200;
// console.log("button width : ",button1.width);
// console.log("button height : ",button1.height);

// button1.onClick(function (){
//     console.log("buttton clicked,................")
// })
// class bluebutton extends Button {
    
//     constructor(content){
//         this.button =document.createElement('button')    
//         this.button.innerHTML=content; 
//         document.body.appendChild(this.button)  
//     }
// }


// {
// class   Paragraph{
//     paragraph;
//     constructor(contentpera){
//         this.paragraph =document.createElement('p') ;   
//         this.paragraph.innerHTML=contentpera; 
//         document.body.appendChild(this.paragraph);
//     }
//     onClick(fn) {
//         this.paragraph.onclick = fn;
//     }

//     onMouseOver(fn) {
//         this.paragraph.onmouseover = fn;
//     }
//     onMouseOut(fn) {
//         this.paragraph.addEventListener('mouseout', fn);
//     }
//     setColor(color) {
//         this.paragraph.style.color = color;
//     }
    
//     setBgColor(color) {
//         this.paragraph.style.backgroundColor = color;
//     }
//     setFontSize(size) {
//         this.paragraph.style.fontSize = size + "px";
//     }
    
// }

// let paragraph1 = new Paragraph ('JavaScript is a scripting language used to develop web pages. Developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions. It also enables users to load content into a document without reloading the entire page.');


// paragraph1.onClick(function () {
//     console.log("Paragraph clicked...");
//     paragraph1.setColor('blue'); 
//     paragraph1.setBgColor('black'); 
//     paragraph1. setFontSize(50); 
// });
// paragraph1.onMouseOver(function () {
//     console.log("Mouse over the paragraph...");
//     paragraph1.setColor('red'); 
//     paragraph1.setBgColor('black');
// })
// paragraph1.onMouseOut(function () {
//     console.log("Mouse Out the paragraph...");
//     paragraph1.setColor('black'); 
//     paragraph1.setBgColor('white'); 
//     paragraph1. setFontSize(20); 

// })
// }
  





// console.log("\n\n\n\n\n\n")

// console.log ("first line....");


// //timers

// setTimeout(() =>{
//     console.log("second line.....")
// })

// // event lisetener

// let btnn = document.getElementById('bttn1');
//     console.log(btnn);

//     btnn.addEventListener('click' ,function (){
//         console.log("button clicked.......")
//     })


// // network fetch () api

// let datas =fetch('https://jsonplaceholder.typicode.com/users')
// console.log("datas",datas);

// console.log("third line.....")


//asynchronos Operation
//call stack
//event loop
//callback queue
//microtask queue
//web space environment



// let xhr =new XMLHttpRequest();
// console.log("xhr :",xhr);

// //get
// //post
// //put
// //delete

// xhr.open('get','https://jsonplaceholder.typicode.com/users');
// document.getElementById('bttn1').addEventListener('click',function (){
//     xhr.send();
// });

// xhr.onreadystatechange =function(){
//     console.log("readystate :", xhr.readyState);


//         if(xhr.readystate ===4){
//             console.log("status :" , xhr.status)

//             if(xhr.status===200){
//                 let reponse = xhr.response;
//                 console.log("response :",reponse);
//                 console.log("typeof(responce) :",typeof(reponse));

//                 let datas= JSON.parse(response);
//                 console.log("datas :",datas)

//                 let dataContainer = document.getElementById('dataContainer');
//                 console.log("dataConatiner :",dataContainer);

//                 let row= '';
//                 for(let i=0; i<datas.lenght; i++){
//                     row= rows +`
//                         <tr>
//                         <td>${datas[i].name}</td>
//                         <td>${datas[i].username}</td>
//                         <td>${datas[i].email}</td>
//                         <td>${datas[i].website}</td>
                    
//                     `
//                 }
//         }
//         console.log("row",rows)
//         dataContainer.innerHTML=rows


//     }
// }


// let xhr = new XMLHttpRequest();
// console.log("xhr:", xhr);

// // Configure the GET request
// xhr.open('get', 'https://jsonplaceholder.typicode.com/users');

// document.getElementById('bttn1').addEventListener('click', function () {
//     xhr.send();
// });

// xhr.onreadystatechange = function () {
//     console.log("readyState:", xhr.readyState);

//     if (xhr.readyState === 4) {
//         console.log("status:", xhr.status);

//         if (xhr.status === 200) {
//             let response = xhr.response; // Corrected variable name and method
//             console.log("response:", response);
//             console.log("typeof(response):", typeof(response));

//             let datas = JSON.parse(response); // Corrected variable name
//             console.log("datas:", datas);

//             let dataContainer = document.getElementById('datacontainer');
//             console.log("dataContainer:", dataContainer);

//             let rows = ''; // Initialize rows variable
//             for (let i = 0; i < datas.length; i++) { // Corrected `length` typo
//                 rows = rows + `
//                     <tr>
//                         <td>${datas[i].name}</td>
//                         <td>${datas[i].username}</td>
//                         <td>${datas[i].email}</td>
//                         <td>${datas[i].website}</td>
//                     </tr>
//                 `;
//             }

//             console.log("rows", rows);
//             dataContainer.innerHTML = rows;
//         }
//     }
// };




// validation


const str1 = "the cat is white";
const str2 = "rat eats fish";
const str3 ="is it ok fishe";
const str4= `haiii
hello world
good to have
you`;
 

const regexp1 =/a/;
const result1=regexp1.test(str1);//check if str1 contains letter 'a'
console.log("result 1 :", result1);// true


const regexp2=/A/i;
const result2=regexp2.test(str1);// check if str1
console.log("result 2 :",result2)//true

const regexp3=/ab/;
const result3=regexp3.test(str1);// check if str1
console.log("result 3:",result3)// false


const regexp4=/[crb]a/;
const result4=regexp4.test(str1);// check if str1
console.log("result 4 :",result4)//true


const regexp5=/[a-z]a/i;
const result5=regexp5.test(str1);// check if str1
console.log("result 5 :",result5)//true

const regexp6=/[a-z0-9]a/i;
const result6=regexp6.test(str1);// check if str1
console.log("result 6:",result6)//true

const regexp7 = /^rat/i;
const result7=regexp7.test(str2);
console.log("result 7",result7);

const regexp8 = /fish$/i;
const result8=regexp8.test(str2);
console.log("result 8",result8);

const regexp9 = /^good/im;
const result9=regexp9.test(str2);
console.log("result 9",result9);

const regexp10 = /haiii$/im;
const result10=regexp10.test(str4);
console.log("result 10",result10);


const regexp11 = /fishes?/i;
const result11=regexp11.test(str3);
console.log("result 11",result11);


const regexp12 = /fish(es)?/i;
const result12=regexp12.test(str3);
console.log("result 12",result12);

const regexp13 = /fishes*$/i;
const result13=regexp13.test(str3);
console.log("result 13",result12);