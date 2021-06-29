# Junior React Native developer interview

1.  Job experience 
    -   React
    -   React Native
2.  Javascript basics

    -   [ ] Context, Bind, Call, Apply 

        ```javascript
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
        ```

    -   [ ] Hoisting 

        ```javascript
        console.log('test var ', testvar);
        console.log('test const ', testconst);
        console.log('test let ', testlet);
        var testvar = 'foo';
        const testconst = 'const';
        let testlet = 'let';

        const a = 'a';

        const func = () => {
            console.log(a);
            const a = 'test';
        };

        func();
        ```

    -   [ ] Closures

        ```javascript
        for (var i = 0; i < 10; i++) {
            setTimeout(() => {
                console.log(i);
            }, 0);
        }
        ```

    -   [ ] Event Loop 
    -   [ ] Pure functions

3.  Typescript

    -   [ ] Return type of function 
    -   [ ] How to get interface field type 
    -   [ ] Conditionals types 

4.  React / React Native

    -   React Hooks
        -   [ ] UseEffect
        -   [ ] UseCallback
        -   [ ] UseRef
        -   [ ] UseState
        -   [ ] UseMemo 
        -   [ ] UseLayoutEffect 
    -   [ ] React.memo HOK 
    -   [ ] Pure components

5.  Git

    -   [ ] Commit ammend
    -   [ ] Rebase vs Merge
    -   [ ] Cherry pick

6.  Algorithm tasks

    -   [ ] Left only uniq values in array 

        > [Link](https://codesandbox.io/s/awesome-kowalevski-or9vf?file=/src/index.js)

    -   [ ] Find index of the first uniq char
        > [Link](https://codesandbox.io/s/recursing-easley-p4wsk?file=/src/index.js)

---

