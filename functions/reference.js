const createUser = () => {
    const user = {name: 'Bob'}
    user.email = 'bob@bot.com'
    return user;
}

const copyArr = (arr) => {
    return [...arr];
}

const includesValue = (arr, val) => {
    return arr.includes(val);
}


// console.log(createUser());

module.exports = {
    copyArr,
    createUser,
    includesValue
};