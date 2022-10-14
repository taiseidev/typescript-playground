export default function genericsAdvancedSample() {
  // map関数のシグネチャ
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const nubmers = mapStringsToNumbers(['123', '456', '789'], (item) => Number(item))
  console.log('Generics advanced sample: 1', nubmers)

  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const strings = mapNumbersToStrings(nubmers, (item) => String(item))
  console.log('Generics advanced sample: 2', strings)
}
