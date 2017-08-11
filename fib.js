'use strict';

/*
0 1 1 2 3 5 8 13 21 34
*/

var fibArray = [];
var firstNum = 0;
var secondNum = 1;

for (var i = 0; i < 10; i++) {
  if (i === 0) {
    fibArray.push(firstNum);
  } else if (i === 1) {
    fibArray.push(secondNum);
  }
  var tmp = firstNum + secondNum;
  firstNum = secondNum;
  secondNum = tmp;
  fibArray.push(tmp);
}
