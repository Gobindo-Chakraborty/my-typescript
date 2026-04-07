// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[]; // Array
type anotherArray = [string, number]; // Array -> 2 values only

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

type UserId = stringOrNumber;

// Literal types

let myName: "Dave";

let userName: "Dave" | "John" | "Amy";
userName = "Amy";

const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any) => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(3, 3));

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

const sumAll = (a: number = 2, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));

console.log((<string | number>"true") as string);

const btn = document.getElementById("#myBtn") as HTMLImageElement;
const btn2 = document.querySelector("img") as HTMLImageElement;
