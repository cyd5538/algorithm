const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [num1, num2] = input[0].split(" ").map((item) => +item);

function isPrime(num) {
    if (num === 1) return;
    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0) return;
    }
    return console.log(num);
  }
  
  for (let i = num1; i <= num2; i++) {
    isPrime(i);
  }
