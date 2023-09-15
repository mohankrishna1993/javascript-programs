// Check whether a given positive number is a multiple of 3 or a multiple of 7


function testDivisiable37(num) {
  if (num % 3 == 0 || num % 7 == 0) {
    return true;
  } else {
    return false;
  }
}


console.log(testDivisiable37(500));