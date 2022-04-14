const numbers = [1,2,3,4];

function getSumFromNumbers () {
    return numbers.reduce((acc, currValue) => {
        
        let rule = currValue % 2 === 0? currValue/2 : currValue*2;
        return acc + rule
    })
}

console.log(getSumFromNumbers())