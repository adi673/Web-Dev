let msg1="  HEllo    ";
let trimmed1=msg1.trim();
let msg2="     Hel     lllo";
let trimmed2=msg2.trim();
console.log(msg1);
console.log(trimmed1);
console.log(msg2);
console.log(trimmed2);



//Strings are immutable in java. NO changes can be made to strings. Whenever we try to make change, a new string is created to store changes and old one remains same

let str=msg1.toLowerCase()  //convert to Upper Case
console.log(str)
str=msg1.toLocaleUpperCase()
console.log(str)

let string="ILoveCOding";
console.log(string.indexOf("ove"));
console.log(string.indexOf("p"));  //returns -1 if string doesnt found
console.log(string.indexOf("o"));




let line="     MethodCHain     ";
let newMsg=line.trim().toUpperCase();  //This is called as MEthodchain.  Methods are performed in chain. and sequence is left to right
console.log("After performing Method chain:",newMsg);




//Slice Method. Returns a part of Original string. str.slice(starting_index, Ending_index)
let strr="ILoveCOding";
let newstr=strr.slice(4);
console.log(newstr);
newstr=strr.slice(4,6); //6th index letter is excluded
console.log(newstr);
console.log(strr.slice(3,strr.length))

let msg="ApanaCollege"
console.log(msg.slice(-2));  //string length -2 => 11-2=9 malab 9 se aage



//Replace Method 
//Searches for a values in the string & return a new string with values replaced
let msg3="ILoveCoding"
msg3=msg3.replace("Love","do")
console.log(msg3);



//Repeat Method
//Repeats the given string given number of times
let msg4="Mango";
msg4=msg4.repeat(5);
console.log(msg4);
