interface Person {
    firstName: string;
    lastName: string;
}

function testFunc3(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let userInfo = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = testFunc3(userInfo);
