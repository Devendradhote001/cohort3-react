// // - Type Inference and Annotation
// let a: string = "hello";
// a = "pol";

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
let arr: number[] = [
  5, 6, 7, 8, 9, 0, 67, 8, 9, 0, 6, 5, 43, 2, 3, 4, 5, 6, 7, 8, 9, 0, 87, 6, 5,
  4, 3,
];

let arr1: string[] = ["jio", "pol", "john"];

let arrBol: boolean[] = [true, false, true, true, true];

// - Tuples

let arr2: [number, number, string, boolean] = [56, 78, "pol", true];

let data: any[] = [{ name: "pol" }, { name: "pol" }, { name: "pol" }];

// enums - options
enum Role {
  ADMIN,
  SUP_ADMIN,
  USER,
}
let role: Role = Role.USER;

// union
let yolo: string | number = "rahul";
yolo = 90;

// literals
type Status = "pending" | "success" | "error";

let status: Status = "pending";
