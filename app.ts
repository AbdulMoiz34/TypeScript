// // Basics Types
// // Number :number => 313,-313
// // String :string => "Hello world"
// // Boolean :boolean => true , false


// let num = 12;
// let str = "Hello world";
// // str = 1131;

// let bool = true;
// let num2: number;
// num2 = 113;

// const str2 = "Abdul moiz";

// // Array

// const arr: string[] = ["Abdul moiz", "Abdullah", "Abdul aziz", "Abdul gaming"];
// arr.push("Abdul");
// // arr.push(131); //error
// const arr2: number[] = [131, 11];
// // arr2.push("Abdul"); //error
// arr2.push(131);


// // Object
// type Person = { //custom type
//     name: string;
//     rollNo: number;
//     className: string;
//     email?: string
// };
// let person: Person = {
//     name: "abdul",
//     className: "React",
//     rollNo: 3324,
//     email: ""
// };

// let person2: Person = {
//     name: "Bilal",
//     rollNo: 424,
//     className: "Ishaq Bhojani",
// };

// // function
// const add = (num1: number, num2: number): number => { //simple function
//     return num1 + num2;
// }

// let func: (x: number, y: number) => number;
// func = () => {
//     return 1313;
//     // console.log("Hello world");
// }







// Typescript is a super set of javascript 
//Basic Types

// Number :number =>982 ,-10
// String :string => "Apple" , "mango"
// Boolean :boolean => true , false"

// Union operator that is used in multiple types



let num: number;
num = 999;

let str: string;
str = "Abdul moiz";


const num2 = 94284;

let num3 = "Abdul gaming yt channel"; //Type string .


// Array

const strArr: string[] = ["Apple", "mango", "Pineapple"];
strArr.push("strawberry");
// strArr.push(8489284); number is not assignable in this bcz type string


const numArr: number[] = [131, -142, -2.3];
numArr.push(4294);
// numArr.push("Hello"); string is not assign in number array



// Custom type
type Person = {
    name: string;
    rollNo: number;
    teacherName: string;
    className: string;
    email?: string;

};
const person: Person = {
    name: "Abdul moiz",
    className: "React js",
    rollNo: 18942,
    teacherName: "Ishaq bhojani",
    email: "test@test.com",
};

const persons: Person[] = [{
    name: "Hamza",
    rollNo: 123456789,
    teacherName: "Nadir bashir",
    className: "afs"
},
    person];
// console.log(persons);


// Union operator => union operator like OR operator but it is used in type symbol= >  | "One pipe"
type Student = {
    name: string;
    rollNo: number | string;
    className: string;
};
const student1: Student = {
    name: "Faizan",
    rollNo: "787", //no error bcz 2 types are allowed either number or string
    className: "React"
};
student1.rollNo = 213923;

// tuples 
const statusCode: [number, string] = [404, "Not Found"]; //tuples => Fixed Length Array

// function type

let func: (x: string, y: string) => string;

func = () => {
    return "";
}