function RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const a = RandomInt(1, 1000);
const b = RandomInt(1, 1000);
const c = RandomInt(1, 1000);

const arr = [a, b, c]