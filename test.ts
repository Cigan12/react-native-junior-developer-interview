interface Test {
    field: {
        foo: string;
    };
}

const getDateNow = () => {
    return {date: Date.now()}
}

// type returnTypeOfGetDateNow = ? 