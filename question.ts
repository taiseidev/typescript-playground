// https://gist.github.com/kenmori/8cea4b82dd12ad31f565721c9c456662

// 0
const greeting = (value: string) => "hello" + value;

// 1
// https://typescriptbook.jp/reference/type-reuse/utility-types/partial
interface FooA {
  bar: string;
  baz: number;
}
type PartialFoo = Partial<FooA>;

// 2
// https://typescriptbook.jp/reference/type-reuse/utility-types/required
type FooB = {
  name?: string;
  age?: number;
};

type RequireA = Required<FooB>;

// 3
// https://typescriptbook.jp/reference/type-reuse/utility-types/pick
type FooC = {
  name?: string;
  age?: number;
};

type Picked = Pick<FooC, "name">;

// 4
// https://typescriptbook.jp/reference/type-reuse/utility-types/omit
type FooD = {
  name?: string;
  age?: number;
};

type Omitted = Omit<FooD, "age">;

// 5
// https://www.azukipan.com/posts/typescript-type-literal/#:~:text=%E3%83%AA%E3%83%86%E3%83%A9%E3%83%AB%E5%9E%8B%E3%81%AF%E3%80%81%E9%96%8B%E7%99%BA%E8%80%85,%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B%E5%9E%8B%E3%81%A7%E3%81%99%E3%80%82

const user = { name: "kenji", age: 98 };

// {
//   name: string;
//   age: number;
// }
// 上記に推論される。

// 6
// TがUに代入可能ならXを返し、そうでなければYを返す。

// 7
interface Part {
  name: string;
  age: number;
  add(): number;
}

const obj = {
  name: "kenji",
  age: 99,
  add: () => 1 * 2,
};

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type result = FunctionPropertyNames<Part>;
