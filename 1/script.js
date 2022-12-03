const input = document.querySelector("p").innerHTML
let formattedInput1 = input.split('\n    \n')
let formattedInput2 = []
let savedInput = []
for (let i = 0; i < formattedInput1.length; i++) {
    formattedInput2.push(formattedInput1[i].split('\n    ').reduce((partialSum, a) => partialSum + parseInt(a), 0))
    savedInput.push(formattedInput1[i].split('\n    ').reduce((partialSum, a) => partialSum + parseInt(a), 0))
}
let sortedArray = formattedInput2.sort(function (a, b) {
    return b - a
})

console.log(sortedArray[0])
console.log(sortedArray[0] + sortedArray[1] + sortedArray[2])

