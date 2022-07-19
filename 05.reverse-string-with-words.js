// Given a String S, reverse the string without reversing its individual words. Words are separated by dots.
//
//
//     Example 1
let string = 'i.like.this.program.very.much'
// Output: much.very.program.this.like.i
// Explanation: After reversing the whole
// string(not individual words), the input
// string becomes
// Much.very.program.this.like.i
//
// Example 2
// Input:
//     S = pqr.mno
// Output: mno.pqr
// Explanation: After reversing the whole
// string , the input string becomes
// mno.pqr

function reverseString(string) {
    let tempArray = string.split('.');
    let result = [];
    for (let idx = tempArray.length - 1; idx >= 0; idx--) {
        result.push(tempArray[idx])
    }
    return result.join('.')
}

console.log(reverseString('pqr.mno'))