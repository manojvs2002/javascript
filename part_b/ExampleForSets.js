// Performance comparison between Set and Array

// Creating a Set
const set = new Set();

// Adding 10000 unique values to the Set
for (let i = 0; i < 10000; i++) {
  set.add(`value${i}`);
}

// Creating an Array
const array = [];

// Adding 10000 values to the Array
for (let i = 0; i < 10000; i++) {
  array.push(`value${i}`);
}

// Searching for a value in the Set
console.time("Set Search");
const setHasValue = set.has("value9999");
console.timeEnd("Set Search");

// Searching for a value in the Array
console.time("Array Search");
const arrayHasValue = array.includes("value9999");
console.timeEnd("Array Search");
