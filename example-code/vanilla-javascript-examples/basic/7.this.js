// console.log('outside', this);

function foo() {
    console.log('inside function', this);
}

// var bar = {
//     fooBar: function(){
//         console.log('inside object', this);
//     },
//     secondKey: 'foo'
// }

var newFoo = new foo();
// foo();
// bar.fooBar();
// newFoo();
