interface Test {
    field: {
        foo: string;
    };
}

interface Another {
    field: Test['field'];
}
