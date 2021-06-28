const getUser = require('./promise');

test('email should be Shanna@melissa.tv', () => {
    expect.assertions(1);
    return getUser().then((data) => {
        expect(data.email).toBe('Shanna@melissa.tv')
    })
});


test('email should be Shanna@melissa.tv ASYNC', async() => {
    expect.assertions(1);
    const data = await getUser()
    expect(data.email).toBe('Shanna@melissa.tv')
});
