
const fibs = function(n) {
    let array = [1, 1]
    for (let i = 2; i <= n; i++) {
        array[i] = array[i-1]+array[i-2]
    }

    return array
}

const fibsRec = function(n) {
    if (n === 0) return [1]
    if (n === 1) return [1,1];

    let array = fibsRec(n-1)
    array.push(array[n-1]+array[n-2])
    return array
}

console.log(fibs(7))
console.log(fibsRec(7));