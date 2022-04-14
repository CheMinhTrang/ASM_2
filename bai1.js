

const numbers = [1,2,3,4];
function multiplyEvenNumberBy2 () {
    return numbers.map(number => {
        let number2 = number % 2 === 0 ? 2 : 1;
        return number*number2;
    })
}

console.log(multiplyEvenNumberBy2())