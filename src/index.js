module.exports = function reverse (n) {
  let str = (Math.abs(n)).toString();
    let reverseNumber = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseNumber += str[i];
    }
  return +reverseNumber;
}
