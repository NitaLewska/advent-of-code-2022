let input = document.querySelector('p').innerHTML
let num = 0
let signal = []
let uniqueItems = []
for (let i = 0; i < input.length; i++) {
    signal = input.slice(i, i + 4).split('')
    uniqueItems = [...new Set(signal)]
    if (uniqueItems.length === 4) {
        num = i + 4
        break
    }
}
console.log(signal, num)

let num2 = 0

for (let i = 0; i < input.length; i++) {
    signal = input.slice(i, i + 14).split('')
    uniqueItems = [...new Set(signal)]
    if (uniqueItems.length === 14) {
        num2 = i + 14
        break
    }
}

console.log(signal, num2)
