let person = {
    getName: () => {
        return 'lina no';
    },
    getAge: () => {
        return 21;
    }
};

let accessor = (methodSuffix) => {
    let methodName = ` get${methodSuffix}`;

    return person[methodName]();
};

console.log(accessor('Name'));

console.log(`i am ${personName}`);