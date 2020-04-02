const {
    Person
} = require('./Person');
console.log("Nice to meet you");

const person = {
    name: "ronnachai Muangkham",
    age: 20
};

console.log(person.name + " age : " + person.age);
console.log(person);

const p1 = new Person('Ronachai', 20);
p1.greeting();