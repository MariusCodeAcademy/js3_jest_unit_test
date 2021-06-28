const axios = require('axios');


const getUser = () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users/2')
        .then(resp => resp.data)
        .catch(err => console.log(err.message)) 
}
// fetch is not defined in node 
// we will use axios
// console.log(getUser().then(data => console.log(data.email)));

module.exports = getUser