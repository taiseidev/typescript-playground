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

  // 合併型（union）と交差型（intersection）
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型... KnightまたはWizardの型を持ちます。
  type Adventurer = Knight | Wizard

  // 交差型... KnightかつWizardの型を持ちます。
  type Paladin = Knight & Wizard

  // Knightよりの冒険者
  const adventure1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連切り',
  }

  // Wizardよりの冒険者
  const adventure2: Adventurer = {
    hp: 100,
    mp: 50,
    weapon: '木の杖',
    magicSkill: 'ファイアボール',
  }

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 600,
    weapon: '強力な杖',
    swordSkill: '三連切り',
    magicSkill: 'ファイアボール',
  }

  console.log(paladin)
}
