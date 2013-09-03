Math.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Math.getRandomObjArr = function(arr) {
  var ind = Math.getRandomInt(0, arr.length-1);
  return arr[ind];
}
Math.radToDeg = function (n) {
  return n * 180.0 / Math.PI;
}
Math.degToRad = function(n) {
  return n * Math.PI / 180.0;
}

Math.getSign = function(n) {
  if(n < 0)
    return -1;
  else
    return 1;
}

Math.toPosAngle = function(n) {
  // Converts any number higher then 360 or lower then -360 to their
  // pos / neg angle
  n = n % 360
  n += 360;
  n %= 360;
  return n;
}
Math.toNegAngle = function(n) {
  // Converts any number higher then 360 or lower then -360 to their
  // pos / neg angle
  n = n % 360
  n -= 360;
  n %= 360;
  return n;
}