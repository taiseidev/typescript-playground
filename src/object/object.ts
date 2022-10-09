export default function objectSample() {
  // object型には意味は全くない
  const a: object = {
    name: 'taisei',
    age: 20,
  }

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'japanese',
    name: 'japan',
  }
  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'United State of America',
  }
  console.log('Object object sample 2 :', country)
}
