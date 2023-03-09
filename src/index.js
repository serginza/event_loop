// Task #1
console.log("Task #1(sum through closure):")

function func(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        };
    };
}

console.log(func(4)(5)(6));
console.log("__________________________")

// Task #2
console.log("Task #2(quick sort):")

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let less =[];
    let more = [];

    const index = Math.floor(arr.length / 2);
    const currentValue = arr[index];

    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            continue
        }
        if (arr[i] < currentValue ) {
            less.push(arr[i])
        } else {
            more.push(arr[i])
        }
    }

    return [ 
        ...quickSort(less), 
        currentValue, 
        ...quickSort(more) 
    ];
}

const array = [4, 68, 91, 14, 364];
const array2 = [4, 68, 91, 14, 364, 34, 144, 99, 104, 53, 87, 777, 23, 533, 11, 7];

console.log(array);                // original massive
console.log(quickSort(array));     // sort massive

console.log(array2);                 // original massive2
console.log(quickSort(array2));      // sort massive2

console.log("__________________________")

// Task #3
console.log("Task #3:")

