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

// javascriptのプリミティブ型はオブジェクトとして扱える
// ex)
"name".length; // 4
// javascriptのプリミティブ型は下記の通り
// 論理型(boolean): trueまたはfalseの真偽値。
const isShow = true;
// 数値型(number): 0や0.1のような数値。
const num = 1;
// 文字列型(string): "Hello World"のような文字列。
const hello = `Helllo World`;
// undefined型: 値が未定義であることを表す型。
let und; // undefined
// ヌル型(null): 値がないことを表す型。
let nul = null;
// シンボル型(symbol): 一意で不変の値。
const s1 = Symbol("foo");
// bigint型: 9007199254740992nのようなnumber型では扱えない大きな整数型。

// 論理型
const isOk: boolean = true;
const isNotOk: boolean = false;

// javascriptでは整数と少数を区別せず、どちらともnumber型
// こんな書き方もできる（使うことはあるのだろうか？）
0.1 == 0.1;
5.0 == 5;

// ○進数を表現したい時は下記のようにする
0b1010; // 2進数
0o755; // 8進数
0xfff; // 16進数

// 桁ごとに区切って表現することも可能
const ONE_HUDRED_MILLION: number = 100_000_000;

// 数値リテラルのプロパティ

// 小数のドットと区別する事ができないためエラーが発生する
// 5.toString();
(5).toString();

// 数値化できない値に対してはNaN型が返却される
const price: number = parseInt("百円");
// NaNであるかのチェック
if (Number.isNaN(price)) {
  console.log("数値化できません");
}

// NaNは等号比較では常にfalseになるため注意が必要である
console.log(NaN == NaN);
console.log(NaN === NaN);

// Infinity型は無限を表す変数
const infinityNum = Math.pow(10, 1000);

// javascriptでは少数の計算に誤差が発生する
0.1 + 0.2 === 0.3; // false
110 * 1.1; // 121.00000000000001
(110 * 11) / 10 === 121; // true

("Hello");
("Hello");
`Hello`;

('He said "madam, I\'m Adam."');
('He said "madam, I\'m Adam."');

// テンプレートリテラル内では変数や計算式や関数を入れる事ができる

const count = 10;
console.log(`現在${count}名が見ています。`);
console.log(`税込${Math.floor(100 * 1.1)}です`);

const message: string = "Hello";

"文字列を" + "結合する事ができます";

const nullX: null = null;

// javascriptではnullに対してtypeofを用いるとobjectが返るので注意が必要
console.log(typeof null); // object

let nameX;
console.log(nameX);
function func() {}
console.log(func());
// const objX = {};
// console.log(obj.name);
const arrX = [];
console.log(arrX[1]);
const undefinedX: undefined = undefined;
