// Exercise 1.1.1
let names = ["Lars","Peter","Jan","Bo"];

// Exercise 1.1.2
function myFilter(array, callback) {
    const filteredArray = [];
    for (const element of array) {
        if (callback(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}

const filteredArr = myFilter(names, (string) => string.length <= 3);
console.log(filteredArr);

// Exercise 1.1.3
function myMap(array, callback) {
    const mappedArray = [];
    for (const element of array) {
        mappedArray.push(callback(element));
    }
    return mappedArray;
}
const mappedArr = myMap(names, (name) => name.toUpperCase());
console.log(mappedArr);

// Exercise 1.2
Array.prototype.myFilter = function(callback) {
    const filteredArray = [];
    for (const element of this) {
        if (callback(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}

Array.prototype.myMap = function(callback) {
    const mappedArray = [];
    for (const element of this) {
        mappedArray.push(callback(element));
    }
    return mappedArray;
}

const filterNames = names.myFilter(name => name.length <= 3);
const mapNames = names.myMap(name => name.toUpperCase());
console.log(filterNames);
console.log(mapNames);

// Exercise 1.3.1
const divs = document.getElementsByTagName('div');
const colors = ['black', 'green', 'yellow'];
for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = colors[i];
}

// Exercise 1.3.2
const button = document.getElementById()