/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
};

module.exports = { isValid };

function isValid(s) {
    const stack = [];
    const mapping = { ")": "(", "}": "{", "]": "[" };

    for (let char of s) {
        if (char in mapping) {
            const topElement = stack.pop() || '#';
            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}
