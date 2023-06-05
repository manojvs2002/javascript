// Performance comparison between Map and Object

// Creating a Map
const map = new Map();

// Adding 10000 key-value pairs to the Map
console.time("Map Add");
for (let i = 0; i < 10000; i++) {
  map.set(`key${i}`, `value${i}`);
}
console.timeEnd("Map Add");

// Creating an Object
const object = {};

// Adding 10000 properties to the Object
console.time("Object Add");
for (let i = 0; i < 10000; i++) {
  object[`key${i}`] = `value${i}`;
}
console.timeEnd("Object Add");

// Removing 10000 keys from the Map
console.time("Map Remove");
for (let i = 0; i < 10000; i++) {
  map.delete(`key${i}`);
}
console.timeEnd("Map Remove");

// Removing 10000 properties from the Object
console.time("Object Remove");
for (let i = 0; i < 10000; i++) {
  delete object[`key${i}`];
}
console.timeEnd("Object Remove");
