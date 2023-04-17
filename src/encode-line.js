const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let str1 = [...str];
  let str2 = [];
  let sum = 1;

  str1.forEach((element, index) => {
     if (index > 0 && str2[str2.length - 1].includes(element)) {
        sum++;
        str2[str2.length - 1] = `${sum}${element}`;
     } else {
        sum = 1;
        str2.push(`${element}`);
     }
  });
  return str2.join('');
}

module.exports = {
  encodeLine
};
