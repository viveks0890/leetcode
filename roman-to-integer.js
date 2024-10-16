/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
  /* To convert a Roman numeral string to an integer, you can use the following approach:
    
    -Initialize a variable result to store the final integer value.
    -Create a map that associates each Roman numeral symbol with its corresponding value.
    -Iterate through the Roman numeral string from left to right.
    -If the current Roman numeral symbol is less than the next symbol, subtract its value from the result. Otherwise, add its value to the result.
    -Return the final value stored in result.
    
    */

  const romanToNumberMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let output = 0;

  for (let i = 0; i < s.length; i++) {
    const currentIterationValue = romanToNumberMap[s[i]];
    if (currentIterationValue < romanToNumberMap[s[i + 1]]) {
      output -= currentIterationValue;
    } else {
      output += currentIterationValue;
    }
  }

  return output;
};

console.dir(romanToInt("LVIII"));
