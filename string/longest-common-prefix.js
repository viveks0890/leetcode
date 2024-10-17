/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
  let pattern = "";
  if (strs.length === 1) return strs[strs.length - 1];
  if (strs.length > 1) {
    const sortedStr = strs.sort();
    console.log(sortedStr);
    if (sortedStr[0] === sortedStr[sortedStr.length - 1]) return sortedStr[0];
    console.log(sortedStr);
    let i = 0;
    while (sortedStr[0][i] === sortedStr[sortedStr.length - 1][i]) {
      pattern = pattern + sortedStr[0][i];
      i++;
    }
  }

  return pattern;
};

console.dir(longestCommonPrefix(["flower", "flow", "flight"]));
console.dir(longestCommonPrefix(["dog", "racecar", "car"]));
