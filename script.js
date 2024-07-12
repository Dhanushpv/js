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





// array




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
console.log("json_obj :", josn);
console.log("typeof obj : ",typeof obj);
console.log("firstname :", json_obj.firstname);



let parsed_json_obj =JSON.parse(json_obj);
console.log("parsed_json_obj :" ,parsed_json_obj)