function checkObj(obj, checkProp) {

  var objFound = obj.hasOwnProperty(checkProp);
  if (objFound == true) {
    return obj[checkProp];
  }
  return "Not Found";

}