// isitraukti reikiama funkicja
const {add, divide, showValue, notMoreThan} = require('./func')

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

it('should be falsy', () => {
    // expect(showValue(5)).toBeFalsy()
    expect(showValue(0)).toBeFalsy()
    expect(showValue('')).toBeFalsy()
    expect(showValue(undefined)).toBeFalsy()
    expect(showValue(null)).toBeFalsy()
    expect(showValue([].length)).toBeFalsy()
    expect(showValue(Object.keys({}).length)).toBeFalsy()
});

it('should be lest than 400', () => {
    expect(notMoreThan(400)).toBe(true)
    expect(notMoreThan(400)).not.toBe(false)
    expect(350).toBeLessThan(400)
    expect(400).toBeLessThanOrEqual(400)
});

// strin regex

it('team should not contain I ', () => {
    expect('teami').not.toMatch(/I/);
    expect('+3708545874').toMatch(/\+370/)
    // expect('+3448545874').toMatch(/\+370/)
});



// if (add(1, 6) !== 7) throw new Error('wronng')