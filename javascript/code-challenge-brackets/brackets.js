'use strict';

function validateBrackets(string) {
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    let e = string[i];
    if (e === '(' || e === '[' || e === '{') {
      stack.push(e);
      continue;
    }
    if (stack.length === 0) {
      return false;
    }
    let check;
    switch (e) {
      case ')':
        check = stack.pop();
        if (check !== '(') {
          return false;
        }
        break;
      case ']':
        check = stack.pop();
        if (check !== '[') {
          return false;
        }
        break;
      case '}':
        check = stack.pop();
        if (check !== '{') {
          return false;
        }
        break;
    }
  }
  return stack.length === 0;
}

let string = '{}'; // true
let string2 = '{}(){}'; // true
let string3 = '()[[Extra Characters]]'; // true
let string4 = '(){}[[]]'; // true
let string5 = '{}{Code}[Fellows](())'; // true
let string6 = '[({}]'; // false
let string7 = '(]('; // false
let string8 = '{(})'; // false
console.log(validateBrackets(string));
console.log(validateBrackets(string2));
console.log(validateBrackets(string3));
console.log(validateBrackets(string4));
console.log(validateBrackets(string5));
console.log(validateBrackets(string6));
console.log(validateBrackets(string7));
console.log(validateBrackets(string8));

module.exports = validateBrackets;