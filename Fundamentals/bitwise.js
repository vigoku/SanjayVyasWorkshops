//* ! && ||

var result = 1 && 2;
console.log(result);

result = 1 & 3 ;
console.log(result);

//  ^ xor -> diff = 1, same = 0
// 01 ^ 10 = 11


result = 1 ^ 2;
console.log(result);

// inversion
// c = a ^ b, c ^ a = b, c^ b = a
console.log (result ^ 1);
console.log (result ^ 2);