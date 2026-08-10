"use strict";
// // - Type Inference and Annotation
// let a: string = "hello";
// a = "pol";
Object.defineProperty(exports, "__esModule", { value: true });
// a = "bye";
// console.log(a);
// // primitive data types
// // string,
// let val: string = "Shubham";
// // boolean,
// let val2: boolean = true;
// // number,
// let b: number = 90;
// // undefined,
// let h: undefined = undefined;
// // bigint,
// let g: bigint = 79697678n;
// // symbol
// let y: symbol = Symbol("hello");
console.log("arrays tuples.");
// let a: unknown = "faizal";
// console.log(a.toUpperCase());
// let y: never;
// - Arrays
let arr = [
    5, 6, 7, 8, 9, 0, 67, 8, 9, 0, 6, 5, 43, 2, 3, 4, 5, 6, 7, 8, 9, 0, 87, 6, 5,
    4, 3,
];
let arr1 = ["jio", "pol", "john"];
let arrBol = [true, false, true, true, true];
// - Tuples
let arr2 = [56, 78, "pol", true];
let data = [{ name: "pol" }, { name: "pol" }, { name: "pol" }];
// enums - options
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SUP_ADMIN"] = 1] = "SUP_ADMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
let role = Role.USER;
// union
let yolo = "rahul";
yolo = 90;
let status = "pending";
//# sourceMappingURL=index.js.map