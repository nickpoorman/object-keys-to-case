module.exports = function(obj, caseFn) {
  var keys = Object.keys(obj);
  var n = keys.length;
  var key;
  var keyInCase;
  while (n--) {
    key = keys[n];
    keyInCase = caseFn(key);
    if (key === keyInCase) continue;
    obj[keyInCase] = obj[key];
    delete obj[key];
  }
  return obj;
}
