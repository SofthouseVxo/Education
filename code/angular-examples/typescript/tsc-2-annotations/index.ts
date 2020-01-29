function testFunc2(person: string) {
    return "Hello, " + person;
}

let userName2 = 'John Doe';
// let userName2 = [0, 1, 2];

document.body.innerHTML = testFunc2(userName2);

// basic types: https://www.typescriptlang.org/docs/handbook/basic-types.html