var m = new Map(); //Hashtable dictionary

var languages=  ['c', 'c++', 'python', 'java', 'javascript', 'dart'];

console.log(languages);

console.log(languages.map(lang => lang.toUpperCase()));


console.log(languages.map(lang => lang.length));

console.log(languages.map(lang => {return {language:lang, length:lang.length}}));

console.log(languages.map(lang => ( {language:lang, length:lang.length})));

console.log(languages.map(lang => ( {[lang]:lang.length})));

id = "identifier";
var obj = {[id]:1}; // use 
console.log(obj);


console.log(languages.map(lang=>lang + ", "));
console.log(languages.reduce((final,lang) => final + ', ' + lang));
console.log(languages.join(", "));

console.log(languages.reduce((final, lang) => final.concat(lang), []));

console.log(languages.reduce((final, lang) => (final.push(lang),final), []));

console.log(languages.find(element => element == 'c'));

console.log(languages.findIndex(element => element == 'c++'));