// import World from "./world";

// const root = document.getElementById("root");
// const world = new World("Hello Taisei!");
// world.sayHello(root);

// 03.基本の型定義
// import { unknownSample, anySample, notExistSample, primitiveSample } from './basic'
// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

// 04.関数の型定義
import { logMessage, logMessage2 } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

logMessage('Hello TypeScript')
logMessage2('Hello TypeScript2')

isUserSignedIn('ABC', 'taisei')
isUserSignedIn2('ABC')
const sum = sumProductsPrice(100, 200, 300, 400, 500)
console.log('Function parameters sample 5:', sum)
