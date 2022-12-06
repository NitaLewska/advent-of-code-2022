let input = document.querySelector('p').innerHTML.split('\n        ')
let stack = [['Z', 'T', 'F', 'R', 'W', 'J', 'G'], ['G', 'W', 'M'], ['J', 'N', 'H', 'G'], ['J', 'R', 'C', 'N', 'W'], ['W', 'F', 'S', 'B', 'G', 'Q', 'V', 'M'], ['S', 'R', 'T', 'D', 'V', 'W', 'C'], ['H', 'B', 'N', 'C', 'D', 'Z', 'G', 'V'], ['S', 'J', 'N', 'M', 'G', 'C'], ['G', 'P', 'N', 'W', 'C', 'J', 'D', 'L']]

for (let i = 0; i < input.length; i++) {
    input[i] = input[i].match(/[-+]?[0-9]*\.?[0-9]+/g)
    for (let j = 1; j <= input[i][0]; j++) {
        let moved = ''
        moved = stack[input[i][1] - 1].pop()
        stack[input[i][2] - 1].push(moved)
    }
}

let topBoxes = []

for (let i = 0; i < stack.length; i++) {
    topBoxes.push(stack[i][stack[i].length - 1])
}

let ans = topBoxes.join('')

console.log(ans)


let stackPart2 = [['Z', 'T', 'F', 'R', 'W', 'J', 'G'], ['G', 'W', 'M'], ['J', 'N', 'H', 'G'], ['J', 'R', 'C', 'N', 'W'], ['W', 'F', 'S', 'B', 'G', 'Q', 'V', 'M'], ['S', 'R', 'T', 'D', 'V', 'W', 'C'], ['H', 'B', 'N', 'C', 'D', 'Z', 'G', 'V'], ['S', 'J', 'N', 'M', 'G', 'C'], ['G', 'P', 'N', 'W', 'C', 'J', 'D', 'L']]

for (let i = 0; i < input.length; i++) {
    let moved = stackPart2[input[i][1] - 1].slice(-input[i][0])
    for (let j = 1; j <= input[i][0]; j++) {
        stackPart2[input[i][1] - 1].pop()
    }
    stackPart2[input[i][2] - 1] = stackPart2[input[i][2] - 1].concat(moved)
}

let topBoxes2 = []

for (let i = 0; i < stackPart2.length; i++) {
    topBoxes2.push(stackPart2[i][stackPart2[i].length - 1])
}

let ans2 = topBoxes2.join('')

console.log(ans2)