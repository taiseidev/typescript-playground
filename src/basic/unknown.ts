export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log('unknown sample 1', typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === 'foo'
  console.log('unknown sample 2', typeof isFoo, isFoo)

  // エラー
  //   const sum = maybeNumber + 10

  // number型であるかの検証を行なっているためmaybeNumberに10を足すことが出来る

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('unknown sample 3', typeof sum, sum)
  }
}
