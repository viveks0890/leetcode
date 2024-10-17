/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
  if (s) {
    const arrStack = [];
    const openingBrackets = ["(", "{", "["];
    let elemToCheck = "";
    for (let char of s) {
      elemToCheck = "";
      if (openingBrackets.includes(char)) {
        arrStack.push(char);
      } else if (arrStack.length > 0) {
        switch (char) {
          case "}": {
            elemToCheck = "{";
            break;
          }
          case ")": {
            elemToCheck = "(";
            break;
          }
          case "]": {
            elemToCheck = "[";
            break;
          }
        }

        if (arrStack[arrStack.length - 1] === elemToCheck) {
          arrStack.pop();
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    return arrStack.length === 0;
  }

  return false;
};

console.dir(isValid("()")); // true
console.dir(isValid("(]")); // false
