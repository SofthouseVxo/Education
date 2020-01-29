/**
 * Defined params - have to return a number
*/ 
function add(x: number, y: number): number {
    return x + y;
}

const result = add(12,34);
console.log(result);




/**
 * Required parameters - Default - However in JavaScript always optional
 */
function requiredBuildName(firstName: string, lastName?: string) {
    return firstName + ' ' + lastName;
}

const fullName = requiredBuildName('John');
console.log(fullName);




/**
 * Required parameters - Default - However in JavaScript always optional
 */
function defaultBuildName(firstName: string, lastName = 'Smith') {
    return firstName + ' ' + lastName;
}

const anotherFullName = defaultBuildName('John');
console.log(anotherFullName);

// https://www.typescriptlang.org/docs/handbook/functions.html