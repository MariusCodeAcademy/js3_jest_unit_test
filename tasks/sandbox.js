const testArray = [
    { hasCar: true, sex: 'male'},
    { hasCar: true, sex: 'male'},
    { hasCar: false, sex: 'male'},
    { hasCar: true},
    { hasCar: true, sex: 'female'},
    { hasCar: true, sex: 'female'},
    // {male: 2, female: 3}
]


typeof Array.isArray(testArray) && testArray.length !== 0 && testArray.forEach(p => {
    console.log(Object.keys(p).includes('sex'))
})