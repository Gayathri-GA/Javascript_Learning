function randomRange(myMin, myMax) {
  var num = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
  return num;
}