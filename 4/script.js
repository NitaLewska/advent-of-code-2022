let input = document.querySelector('p').innerHTML.split('\n        ')
let pairs = []
let fullOverlaps = 0
let noOverlaps = 0
let a, b, c, d = 0
for (i = 0; i < input.length; i++) {
    pairs.push(input[i].split(','))
    let formattedPair = []
    formattedPair.push(pairs[i][0].split("-"))
    formattedPair.push(pairs[i][1].split("-"))
    a = +formattedPair[0][0]
    b = +formattedPair[0][1]
    c = +formattedPair[1][0]
    d = +formattedPair[1][1]
    if (((c >= a) && (c <= b) && (d >= a) && (d <= b)) || ((a >= c) && (b <= d) && (a <= d) && (b >= c))) {
        fullOverlaps++
    }

    if ((c > b) || (a > d)) {
        noOverlaps++
    }
}

let overlaps = pairs.length - noOverlaps

console.log(fullOverlaps, overlaps)