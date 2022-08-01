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
