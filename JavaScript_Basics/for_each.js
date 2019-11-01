// forEach method in JavaScript
/* The forEach() method executes a provided function - as a callback - once per each
item in an Array in insertion order. */


// assume we have an array of numbers and we need to get square of each number
const numbers = [5, 4, 6, 12, 23, 1, 72], squares = [];

[5, 4, 6, 12, 23, 1, 72].forEach(n => {
  squares.push(n * n)
});

console.log(squares);

// expected output: Array [25, 16, 36, 144, 529, 1, 5184]


// Another example using index of elements in the callback function
// In this example, we create an Object from an Array

const users = ['John', 'Sally', 'Brad', 'Jack'], usersObj = {}

users.forEach((user, index) => {
  usersObj[index] = user
})

console.log(usersObj)
// expected output : Object {0: "John", 1: "Sally", 2: "Brad", 3: "Jack"}

// It can be used on Objects
const obj = { "foo": 3, "bar": {}, "baz": undefined }
Object.keys(obj).forEach(key => {
  console.log(`${key} : ${obj[key]}`)
})

// expected output :
// foo : 3
// bar: [object Object]
// baz: undefined

// ** Object.keys(obj) is a method to get object keys in an array. In our example: Object/keys(obj) = ['foo','bar','baz']

// it can be used with Maps too
// Maps is another form of Data storage in key-value pairs in Javascript
// for more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
const logMapElements = (value, key) => {
  console.log(`map.get('${key}') = ${value}`);
}
new Map([["foo", 3], ["bar", {}], ["baz", undefined]]).forEach(logMapElements);
// logs:
// "map.get('foo') = 3"
// "map.get('bar') = [object Object]"
// "map.get('baz') = undefined"