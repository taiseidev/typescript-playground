export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object alias sample', japan)

  const america: Country = {
    capital: 'Washington',
    language: 'English',
    name: 'America',
  }
  console.log('Object alias sample', america)
}
