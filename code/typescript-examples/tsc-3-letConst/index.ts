function sayHelloWithLet(){
    for(let i=0; i<10; i++){
        console.log(i);
        for(let i=0; i<10; i++){
            console.log(i);
        }
    }
}

function sayHelloWithVar(){
    for(var i=0; i<10; i++){
        console.log(i);
        for(var i=0; i<10; i++){
            console.log(i);
        }
    }
}

// sayHelloWithVar();
sayHelloWithLet();
