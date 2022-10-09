export default function notExistSample() {
  let name = null
  console.log('notExist sample: 1', typeof name, name)

  if (!name) {
    //     name !== null
    console.log('名前はありません')
  } else {
    console.log('吾輩は猫である', name)
  }

  let age = undefined
  console.log('名前はありません', typeof age, age)

  age = 28

  if (!age) {
    console.log('年齢は秘密です')
  } else {
    console.log('年齢は' + age + '歳です')
  }
}
