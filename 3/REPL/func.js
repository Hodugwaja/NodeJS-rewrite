const {odd, even} = require('./var');

function CheckOddOrEven(num){
    if(num%2){
        return odd;
    }
    return even;
}

module.exports = CheckOddOrEven;