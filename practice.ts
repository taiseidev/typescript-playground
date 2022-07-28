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

var myName = "太郎";
var yourName;

// varを使わない方が良い理由
var xy = 1;
var xy = 2;
// 同名の変数を宣言する事ができてしまう。
// 後に定義した変数が採用される。

// if文内で書いたxの変数を参照してif文下の変数xも2となってしまう
// ブロックスコープを飛び越えて値を参照してしまう。
function print() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x); // 2
  }
  console.log(x); // 2
}

function print() {
  const x = 1;
  if (true) {
    const x = 2;
    console.log(x); // 2
  }
  console.log(x); // 1
}

// 型推論と動的型付けの違い
// 型推論はコンパイル時に型が推論されてそれ以降は変更される事がないためあくまでも静的型付け
let a = 1; // この時点でaの型はnumberだと推論される
// let a: number;
// a = "hello";aはnumberのためstringを入れることはできない

// 動的型付けは実行のタイミングで型が決まる
// let x = 1; // xはnumber型となる
// x = "hello"; //x はstring型となる
// console.log(x.substring(1, 3));
// これ色んなところでバグ発生しそうだな....
