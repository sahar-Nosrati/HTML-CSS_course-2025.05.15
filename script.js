console.log(123)
console.log("sahar");


const rangeNumbers = 1000;
const divisiableNumber = [];

for (let i = 100; i <= rangeNumbers; i++){
  i% 7 === 0 ? divisiableNumber.push(i) : divisiableNumber;
}

console.log(divisiableNumber);