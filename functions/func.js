function add(num1, num2) {
    const sum = num1 + num2;
    // return 15;
    return sum;
}

function divide(n1, n2) {
    if (n2 === 0) return null
    return n1 / n2;
}

function showValue(val) {
    return val;
}

function notMoreThan(val) {
    const goods1 = 200;
    const goods2 = 150;
    return goods1 + goods2 < val ? true : false
}

module.exports = {
    add,
    divide,
    showValue,
    notMoreThan
}