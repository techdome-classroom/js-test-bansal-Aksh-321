/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
};

module.exports = { isValid };

def isValid(s: str) -> bool:
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)
    return not stack
