const { readFileSync,writeFileSync } = require('fs');

//let cont = readFileSync('./temp.js', 'utf-8');

let cont = readFileSync('./.spelling', 'utf-8');

let originalArr = cont.split('\n');

originalArr.forEach((name) => {
    let count = originalArr.filter(na => na == name).length;
    if (count > 1)
        console.log(name);
});

console.log(originalArr.length);
// var a = new Set(originalArr);
// var temp='';
// a.forEach((tt)=>{
//   temp += `"${tt.trim()}",\n`;
// });
// writeFileSync('./dd.js', temp);
// console.log(a.size)
