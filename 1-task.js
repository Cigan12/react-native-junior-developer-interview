const obj = {
    foo: 'bar',
    arrowFunc: () => {
        console.log('1.foo = ', this);
    },
    func() {
        console.log('2.foo = ', this.foo);
        return () => {
            console.log(this);
        };
    },
};

obj.arrowFunc(); // 1.
obj.func(); // 2.
obj.func()(); // 3.

// console.log('1.test var ', testvar);
// console.log('2.test const ', testconst);
// console.log('3.test let ', testlet);
// var testvar = 'foo';
// const testconst = 'const';
// let testlet = 'let';

// const a = 'a'

// const func = () => {
//   console.log(a)
//   const a = 'test'
// }

// func()

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
// }
