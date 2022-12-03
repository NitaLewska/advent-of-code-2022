let input = document.querySelector('p').innerHTML.split('\n        ')
let rucksacks = []
let items = []
let priority = [0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let prioritiesSum = 0

for (let i = 0; i < input.length; i++) {
    rucksacks.push([input[i].substring(0, (input[i].length / 2)), input[i].substring(input[i].length / 2)])
    items.push(rucksacks[i][0].split('').filter(a => rucksacks[i][1].split('').includes(a)))
    prioritiesSum += priority.indexOf(items[i][0])
}
console.log(prioritiesSum)

let badges = []
let badgesSum = 0
for (let i = 0; i < input.length; i += 3) {
    badges.push(input[i].split('').filter(a => input[i + 1].split('').includes(a)).filter(a => input[i + 2].split('').includes(a))[0])
}

for (let i = 0; i < badges.length; i++) {
    badgesSum += priority.indexOf(badges[i])
}

console.log(badgesSum)