// javascript
let x = 1;
x = 2;
// letの場合は再代入が可能
console.log(x);

// letの場合は初期化する必要なし
let y; // undefined
y = 1;
console.log(y);

const z = 1;
// z = 2; constは再代入不可

const obj = { a: 1 };
// obj = { a: 2 }; 再代入不可
obj.a = 2;
console.log(obj.a); // プロパティの変更は可能
// オブジェクトを敷衍にするにはreadonlyにする必要がある
// https://typescriptbook.jp/reference/values-types-variables/object/readonly-property

const arr = [2, 3];
// arr = [3, 4]; ✖️
arr[1] = 4;
arr.push(5);
