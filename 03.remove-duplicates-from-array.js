// Remove duplicates in an array.

let dupes = [1,2,3,'a','a','f',3,4,2,'d','d'];

function removeDups(array) {
    let obj = {};
    let result = [];
    for (let value of array) {
        if(obj[value]) {
            obj[value]++
        } else {
            obj[value] = 1;
        }
    }
    for (let key in obj) {
        if (+key) {
            result.push(+key)
        } else {
            result.push(key)
        }
    }
    return result;
}

console.log(removeDups(dupes))

//result => [1,2,3,’a’, ‘f’, 4, ‘d’];
