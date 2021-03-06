"use strict";

const people = [
  {
    id: "it51",
    name: "Jonas",
    surname: "Jonaitis",
    sex: "male",
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
    devices: ["laptop", "phone"],
  },
  {
    id: "it52",
    name: "Severija",
    surname: "PiktutytÄ—",
    sex: "female",
    age: 126,
    income: 1300,
    married: false,
    hasCar: true,
    devices: ["tablet", "phone"],
  },
  {
    id: "it53",
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
    devices: ["laptop", "tablet", "phone", "drone"],
  },
  {
    id: "it54",
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
    devices: ["tablet", "phone"],
  },
  {
    id: "it55",
    name: "Samanta",
    surname: "UostauskienÄ—",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
    devices: ["laptop", "phone"],
  },
  {
    id: "it56",
    name: "Janina",
    surname: "StalautinskienÄ—",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
    devices: ["laptop", "tablet", "phone"],
  },
];

function allPeople() {
  return [...people]
}

// console.log(people);

// 1. Naudojant Array.prototype.forEach atspausdinti visus vyrus.
const printMalesOnly = function (person) {
  // jei lytis === male tai vyras, kiti atvejai moteris
  if (person.sex === "male") return person;
  //   person.sex === "male" ? console.log(person) : null;
};

// panaudoti printMalesOnly su foreach ant people masyvo
// masyvo pavadinimas . forEach( funkcija 'callback' )
const malesOnly = people.map(printMalesOnly).filter(p => p);
console.log(' malesOnly', malesOnly);


// 2. Naudojant Array.prototype.forEach atspausdinti visas moteris jaunesnes nei 35 metai.
const printYoungFemales = function (person) {
  if (person.sex === "female" && person.age < 35) return person;
};
console.log(
  "2. Naudojant Array.prototype.forEach atspausdinti visas moteris jaunesnes nei 35 metai."
);
people.forEach(printYoungFemales);

// 3. Naudojant Array.prototype.forEach atspausdinti visus Å¾mones kurie turi maÅ¡inas.

// 4. Naudojant Array.prototype.forEach atspausdinti visus susituokusius Å¾mones.

console.log(
  "4. Naudojant Array.prototype.forEach atspausdinti visus susituokusius Å¾mones."
);

people.forEach(function (person) {
  if (person.married) console.log(person);
});

// 5. Naudojant Array.prototype.forEach atspausdinti visÅ³ vairuojanÄ?iÅ³ Å¾moniÅ³ lytÄ¯.
function printSexIfHasCar(person) {
  if (person.hasCar) console.log(person.sex);
}

console.log(
  "5. Naudojant Array.prototype.forEach atspausdinti visÅ³ vairuojanÄ?iÅ³ Å¾moniÅ³ lytÄ¯."
);
people.forEach(printSexIfHasCar);

// 6. Naudojant Array.prototype.forEach ir globalius kintamuosius,
//    suskaiÄ?iuoti vairuojanÄ?iÅ³ moterÅ³ ir vyrÅ³ kiekius, bei juos atspausdinti.

// globalus kintamais
let drivingMaleCount = 0;
let drivingFemaleCount = 0;

const countDrivers = function (person) {
  if (person.hasCar) {
    // visi kurie turi automobilius
    // terenary operator
    person.sex === "male" ? drivingMaleCount++ : drivingFemaleCount++;
  }
};
people.forEach(countDrivers);

// 7. Pagal people masyvÄ…, naudojant Array.prototype.map, suformuokite masyva su objektais, kurie turÄ—s savybes sex ir income

console.log(
  "7. Pagal people masyvÄ…, naudojant Array.prototype.map, suformuokite masyva su objektais, kurie turÄ—s savybes sex ir income"
);

function lytisIrPajamos(person) {
  const result = {
    sex: person.sex,
    income: person.income,
  };
  return result;
}

const sexAndIncome = people.map(lytisIrPajamos);



// 8. Pagal people masyvÄ…, naudojant Array.prototype.map, suformuokite masyva pakeiÄ?iant savybÄ™ 'income' Ä¯ 'salary'
// spread operator.

const renameIncome = function (person) {
  //   const renamed = {
  //     name: person.name,
  //     surname: person.surname,
  //     sex: person.sex,
  //     age: person.age,
  //     salary: person.income,
  //     married: person.married,
  //     hasCar: person.hasCar,
  //   };
  // = zenklas neperkopijuoja reference tipo reiksmiu
  //   const localPersonCopy = person;
  //
  const localPersonCopy = { ...person }; // sukuriam seklia kopija kad nepakeisti orginalo
  localPersonCopy.salary = person.income;
  delete localPersonCopy.income;
  return localPersonCopy;
};

console.log(
  "8. Pagal people masyvÄ…, naudojant Array.prototype.map, suformuokite masyva pakeiÄ?iant savybÄ™"
);




// 9. Pagal people masyvÄ…, naudojant Array.prototype.map, suformuokite masyva kuriame nebÅ«tÅ³ lyties, vardo ir pavardÄ—s
function noSexNameSurname(person) {
  // pasidarom vietine localia seklia kopija
  const localPerson = { ...person };
  // istrinam ko neturi buti galutiniam masyve
  delete localPerson.sex;
  delete localPerson.surname;
  delete localPerson.name;
  // grazinam nutrinta objekta
  return localPerson;
}

console.log(
  "9. Pagal people masyvÄ…, naudojant Array.prototype.map, suformuokite masyva kuriame nebÅ«tÅ³ lyties, vardo ir pavardÄ—"
);

let nutrintas = people.map(noSexNameSurname);

// 10. Pagal people masyvÄ…, naudojant Array.prototype.map, suformuokite masyvÄ… kur 
// savybÄ—s name ir surname bÅ«tÅ³ pakeistos viena savybe - fullname

let nameSurnameArr = people.map((person) => {
  // nusikopojuoti objekta
  const localPerson = { ...person };
  delete localPerson.name;
  delete localPerson.surname;
  // sukuriam nauja savybe
  localPerson.fullname = `${person.name} ${person.surname}`;
  return localPerson;
});
console.log("10 uzd ===========");

// console.table(nameSurnameArr);

// 11. extra parasyti funkcija kuri is isrikiuoja masyva pagal amziu
// https://www.w3schools.com/jsref/jsref_sort.asp


// tinka skaitinem reiksmem
people.sort((a, b) => b.age - a.age);

// tinka ir textam
people.sort((a, b) => {
  //   if (a.surname < b.surname) return 1;
  //   return -1;
  return a.surname < b.surname ? 1 : -1;
});


function returnDrivers(arr) {
  // {male: 5, female: 4}
  const result = {
    male: 0,
    female: 0
  }
  arr.forEach(p => {
    if (p.hasCar) {
      p.sex === 'male' ? result.male++ : result.female++
    }
  })
  return result;
}


module.exports = {
  returnDrivers,
  allPeople,
  noSexNameSurname,
  printYoungFemales
}