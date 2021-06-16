const func = (a) => {
    const date = new Date();
    return date + a;
};

interface IInterface {
    field: ReturnType<typeof func>;
}
