const BubbleSort = arr => {
    const len = arr.length;
    for (i = 0; i < len - 1; i++) {
        for (j = 0; j < len - (i + 1); j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    } return arr;
};

function RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const a = RandomInt(1, 1000);
const b = RandomInt(1, 1000);
const c = RandomInt(1, 1000);
const arr = [a, b, c]

BubbleSort(arr);
console.log(arr);