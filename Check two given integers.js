function interNum(x, y) {
  if((x < 0 && y > 0) || (x > 0 && y < 0)) {
     return true ;
     } else {
    return false;
  }
}

console.log(interNum(2,2));