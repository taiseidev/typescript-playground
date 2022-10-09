// オプションパラメーターを持つ関数
export const isUserSignedIn = (userid: string, username?: string): boolean => {
  if (userid === 'ABC') {
    console.log('Function parameters sample 1: User is signed in! Username is', username)
    return true
  } else {
    console.log('Function parameters sample 1: User is not signed in!')
    return false
  }
}

// オプションパラメーターを持つ関数
export const isUserSignedIn2 = (userid: string, username: string = 'No name'): boolean => {
  if (userid === 'ABC') {
    console.log('Function parameters sample 1: User is signed in! Username is', username)
    return true
  } else {
    console.log('Function parameters sample 1: User is not signed in!')
    return false
  }
}

export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  })
}
