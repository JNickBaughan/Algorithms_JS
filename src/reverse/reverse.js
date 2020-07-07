const builtInReverse = (letters) => {
    return letters.split('').reverse().join('')
}

const reduceReverse = (letters) => {
    return letters.split('').reduce((acc, char) => {
        return `${char}${acc}`
    }, '')
}

const loopReverse = (letters) => {
    let reversed = "";
    for (let char of letters){
        reversed = `${char}${reversed}`
    }
    return reversed
}

module.exports = { builtInReverse, reduceReverse, loopReverse}