let input = document.querySelector('p').innerHTML.split('\n        ')

let score = 0
let num = 0
let combinations = ["A X","A Y","A Z","B X","B Y","B Z","C X","C Y","C Z"]
let points = [3,4,8,1,5,9,2,6,7]
for (let i=0; i<input.length; i++) {
    num = combinations.indexOf(input[i])
    score = score + points[num]
}
console.log(score)