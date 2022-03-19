"use strict";
//Basic types
let id = 5;
let company = 'Victor';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
//Tuple
let person = [1, 'Victor', true];
//Tuple Array
let employe;
employe = [
    [1, 'Brad'],
    [2, 'ken'],
    [2, 'james'],
];
//unions
let pid = 22;
pid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: 'john',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 4));
