export default function arraySample() {
  // シンプルな型定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  //   colors.push(123) string型の型定義をしているためnumberは入れることができない
  console.log('Array array sample 1', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push('yellow') number型しか受け付けない
  console.log('Array array sample 2', even)

  // 合併型
  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push(456)
  // ids.push(false) bool値は受け付けない
  console.log('Array array sample 3', ids)

  // 配列の型推論
  const generateSomeArray = () => {
    const _someArray = [] // any[]
    _someArray.push(123) // number[]
    _someArray.push('ABC') // (string | number)[]
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true)
  console.log('Array array sample 4', someArray)
}
