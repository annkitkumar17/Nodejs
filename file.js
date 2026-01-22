 const fs= require("fs");

// //sync..
//  fs.writeFileSync("./test.txt","hey there");

// //aync..
//  fs.writeFile("./test.txt","hey there async",(err)=>{}); // callback function add karte hai

//readfile
const data = fs.readFileSync("./contact.txt","utf-8"); //utf= encoding type of file
console.log(data);

   




