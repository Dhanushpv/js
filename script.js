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