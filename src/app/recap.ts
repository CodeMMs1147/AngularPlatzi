const username: string | number = 'codemms';

const sum = (a: number, b: number) => {
    return a + b;
}

sum(1, 4);

class Persona {
    constructor(public age: number, public lastName: string) {}
}

const juan = new Persona(25, 'Echavarria');

juan.age;