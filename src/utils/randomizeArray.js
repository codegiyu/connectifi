export const randomizeArray = (arr) => {
    const copyArr = [...arr];
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const randIdx = Math.floor(Math.random() * copyArr.length);
        const [item] = copyArr.splice(randIdx, 1);

        newArr.push(item);
    }

    return newArr;
}