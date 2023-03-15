// Task #1

console.log("Task #1(sum through closure):")

//Решение с неограниченным количеством аргументов
function func(a) {
    return function(b) {
        return b ? func(a + b) : a;
    }
}

console.log("Sum(2)(3)(5) = " + { toString: func(2)(3)(5) });  // 10
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
        };
        if (arr[i] < currentValue ) {
            less.push(arr[i])
        } else {
            more.push(arr[i])
        };
    };

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

//функция присваивания действия кнопки для каждого пункта задания
function button(func, btn) {
    document.addEventListener("click", (e) => {
        let el = e.target.closest(btn);
        if (el) {
            func();
            document.querySelector(btn).setAttribute('disabled', 'true'); 
        };
    });
}
//Первый пункт задания
function microtask1() {
        queueMicrotask(() => {
            console.log("1_Microtask done!")
            //alert("Microtask done!");   
        });

        setTimeout(() => {
            document.body.style.background = "aqua";
            console.log("1_Body was recolored!");
        }, 0);
}

//Второй пункт задания
function microtask2() {
    queueMicrotask(() => {
        console.log("2-1_Microtask done!")
    });

    queueMicrotask(() => {
        console.log("2-2_Microtask done!")
    });
}

//Третий пункт задания
function microtask3() {
    queueMicrotask(() => {
        console.log("3_Microtask done!") 
    });

    setTimeout(() => {
        document.querySelector(".button3").textContent = "Ура! Кнопка переименована после выполнения микрозадачи!"
        console.log("3_Button was renamed!");
    }, 0)
}

//Кнопки для выполнения каждого пункта задания
button(microtask1, ".button1");
button(microtask2, ".button2");
button(microtask3, ".button3");