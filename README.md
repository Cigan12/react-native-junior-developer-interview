# Junior React Native developer interview

1.  Job experience (опыта нет)
    -   React
    -   React Native
2.  Javascript basics

    -   [ ] Context, Bind, Call, Apply (плохо знает)

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

    -   [ ] Hoisting (плохо знает)

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

    -   [x] Closures

        ```javascript
        for (var i = 0; i < 10; i++) {
            setTimeout(() => {
                console.log(i);
            }, 0);
        }
        ```

    -   [ ] Event Loop (плохо знает)
    -   [x] Pure functions

3.  Typescript

    -   [ ] Return type of function (не знает)
    -   [ ] How to get interface field type (не знает)
    -   [ ] Conditionals types (не знает)

4.  React / React Native

    -   React Hooks
        -   [x] UseEffect
        -   [ ] UseCallback (не знает)
        -   [x] UseRef
        -   [x] UseState
        -   [ ] UseMemo (не знает)
        -   [ ] UseLayoutEffect (забыл спросить)
    -   [ ] React.memo HOK (не знает)
    -   [ ] Pure components (не знает)

5.  Git

    -   [ ] Commit ammend (не знает)
    -   [ ] Rebase vs Merge (не знает)
    -   [ ] Cherry pick (не знает)

6.  Algorithm tasks

    -   [ ] Left only uniq values in array (сделал, но сделал так себе способом, ожидалось, что будет использовать new Set)

        > [Link](https://codesandbox.io/s/awesome-kowalevski-or9vf?file=/src/index.js)

    -   [ ] Find index of the first uniq char (не сделал)
        > [Link](https://codesandbox.io/s/recursing-easley-p4wsk?file=/src/index.js)

---

## Test task feedback

### What did we like

-   Styles variables

### What we didn't like

-   Inline styles
-   Styles usage, you are using only one large file for styles
-   Redux deprecated unreadable usage
-   Navigation folder useless
-   Not using separate file for logic
-   Not using React HOC React.memo
-   Not using React hooks (UseCallback, UseMemo)
-   Type "any" usage
-   Spread using for multiple styles on the element

    > Example:

    ```jsx
    <View style={{ ...commonStyles.heartIconContainer, ...style }} >
    ```

-   Unnecessary conditions

    > Example:

    ```jsx
    {
        pointer ? (
            <TouchableOpacity style={commonStyles._inputPointer}>
                <PointerLight />
            </TouchableOpacity>
        ) : null;
    }
    ```

-   Commits style

---

# Total 0/6
