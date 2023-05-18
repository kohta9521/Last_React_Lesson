const arry = [10, 20, 30, 40];
const newArry = [];

for (let i = 0; i < arry.length; i++) {
  newArry.push(arry[i] * 2);
}

console.log(newArry);

const newArry2 = arry.map((val) => {
  return val * 2;
});

console.log(newArry2);

const newArry3 = newArry2.filter((val) => val > 50);
console.log(newArry3);

const newArry4 = arry.map((val) => val * 2).filter((val) => val < 80);
console.log(newArry4);
