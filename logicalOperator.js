function testLogicalOr(val) {
  if ((val > 10 || val == 10) && val <= 20) {
    return "Inside";
  }
  return "Outside";
}
testLogicalOr(0);
testLogicalOr(9);
testLogicalOr(10);
testLogicalOr(15);
testLogicalOr(19);
testLogicalOr(20);
testLogicalOr(21);
testLogicalOr(25);