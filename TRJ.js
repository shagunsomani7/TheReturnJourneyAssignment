// Assignment - I 
function getUniqueElements(arr) {
    // Intialise the 
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        var flag = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

// Assignment - II
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

function mergeCar(a, b) {
    let c = new Car();
    c.brand = a.brand + "~" + b.brand;
    c.model = a.model + "~" + b.model;
    c.year = a.year + "~" + b.year;

    return c;
}

// Assignemt - III

function uniqueInBothArray(a, b) {
    c = [];
    let set = new Set();
    for (let i = 0; i < a.length; i++) {
        set.add(a[i]);
        c.push(a[i]);
    }

    for (let i = 0; i < b.length; i++) {
        if (set.has(b[i])) {
            continue;
        } else {
            c.push(b[i]);
        }
    }

    return c;

}

let arr = [1, 1, 3, 3, 3, 5, 5]
let unique = getUniqueElements(arr);
console.log(unique);


let a = new Car();
let b = new Car();
let c = new Car();


a = {
    brand: "Audi",
    model: "A8",
    year: 2008

}

b = {
    brand: "Lamborghini",
    model: "Aventador",
    year: 2003
}

c = mergeCar(a, b);

console.log(c);


let arr1 = [1, 3, 5, 7];
let arr2 = [2, 3, 4, 5];

let arr3 = uniqueInBothArray(arr1, arr2);
console.log(arr3);