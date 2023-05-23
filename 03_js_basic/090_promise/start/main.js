// 非同期処理(Promise)
let a = 0;
console.log(a);

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve();
  }, 2000);
}).then(() => {
  console.log(a);
});

console.log(a);
