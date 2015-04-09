exports.isRegExp = function (obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.trim = function (string) {
  return string.replace(/^\s+|\s+$/g, '');
};

exports.isArray = function (obj) {
  return Array.isArray(obj);
}
