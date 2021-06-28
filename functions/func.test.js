// isitraukti reikiama funkicja
const {add, divide} = require('./func')

test('add function should add 5 and 10 to get 15', () => {
    // tikimes naudojam add funkcija su arg 5, 10 gausim 15
    expect(add(5, 10)).toBe(15);
    expect(add(1, 5)).toBe(6);
})

test('20 divided by 10 should be 2', () => {
    expect(divide(20, 10)).toBe(2)
});

test('divide by 0 retuns null' , () => {
    expect(divide(20, 0)).toBe(null)
    expect(divide(20, 0)).toBeNull()
});

// if (add(1, 6) !== 7) throw new Error('wronng')