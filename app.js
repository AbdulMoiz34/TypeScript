// const inp1 = document.querySelector(".inp1")! as HTMLInputElement;
// const inp2 = document.querySelector(".inp2")! as HTMLInputElement;
// const btn = document.querySelector(".btn")!;
// const add = (num1: number, num2: number) => {
//     console.log(num1 + num2);
// }
// btn.addEventListener("click", () => add(+inp1.value, +inp2.value));
// Basics Types
// String => string "Hello" , "Apple"
// Number => number 12 ,-13
// Boolean => boolean true,false
// const num = 12;
// const str = "Hello world";
// const arr: string[] = ["Hello world", "Item 2"];
// arr.push("abdul");
// // arr.push(12);
// const arr1: number[] = [12, -912, 12];
// arr1.push(1839);
// // arr1.push("abdul");
// type Person = {
//     name: string;
//     className: string;
//     teacherName: string;
//     rollNo: number;
//     email?: string
// };
// const person: Person = {
//     name: "Abdul moiz",
//     className: "Javscript",
//     teacherName: "Ishaq Bhojani",
//     rollNo: 798
// };
// const persons: Person[] = [{
//     name: "Abdul moiz",
//     className: "React",
//     teacherName: "nadir bashir",
//     rollNo: 19819,
//     email: "moiz@test.com"
// }];
// function
// let func: (x: number, y: number, z: (str: number) => void) => number;
// func = (num1: number, num2: number, cb) => {
//     cb(12);
//     return num1 + num2;
// };
// const add = (num1: number, num2: number) => {
//     console.log(num1 + num2);
// };
// add(12, 27);
var add = function (num1, num2, calc) {
    if (calc === "add") {
        return num1 + num2;
    }
    else if (calc === "subtract") {
        return num1 - num2;
    }
};
console.log(add(2000, 1209, "subtract"));
