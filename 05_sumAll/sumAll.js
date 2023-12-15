const sumAll = function(num1, num2) {
    let sum = 0;
    if (Array.isArray(num1) || Array.isArray(num2)) return 'ERROR';

    if (num1 > num2) {
        for(let i = num1; i >= num2; i--) {
            sum += i;
            if (num1 < 0 || num2 < 0) return 'ERROR';
            if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR';
        }
    } else if (num2 > num1) {
        for(let i = num1; i <= num2; i++) {
            sum += i;
            if (num1 < 0 || num2 < 0) return 'ERROR';
            if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR';
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
