module.exports = function(obj, caseFn) {
  var keys = Object.keys(obj);
  var n = keys.length;
  while (n--) {
    var key = keys[n];
    obj[caseFn(key)] = obj[key]
    delete obj[key]
  }
  return obj;
}
