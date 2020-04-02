class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`Nice to meet you, ${this.name}  age : ${this.age}`)
    }
}

module.exports = {
    Person
}