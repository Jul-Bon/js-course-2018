function riseToDegree(a) {
    return a * a;
}
console.log(`5: ${riseToDegree(5)}\n15: ${riseToDegree(15)}\n53: ${riseToDegree(53)}`);

function createArr() {
    const arr = [];
    const max = 50;
    const step = 5;
    for (let i = 0; i <= max; i += step) {
        arr.push(i);
    }
    return arr;
}
console.log(createArr());
