const num = 1000;
const maxDigit = function(num){
    if (num < 100 || num > 999)
        return null
    return +num
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
}

console.log(maxDigit(num));

