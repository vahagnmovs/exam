let data = [
    ["The","red", "horse"],
    ["Plane","over","the","ocean"],
    ["Chocolate","ice","cream","is","awesome"],
    ["this","is","a","long","sentence"]
]

function groupeWords(array) {
    return array.map(value => value.join(' '))
}

console.log(groupeWords(data))
// // Result
// ['The red horse',
//     'Plane over the ocean',
//     'Chocolate ice cream is awesome',
//     'this is a long sentence'];