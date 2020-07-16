

export function thousandsSeparators(num) {
  if (!(typeof num === 'number')){
    num = num.replace(/,/g, '')
  }
  const result = num.toString().split('.')
  result[0] = result[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return result.join('')
}


export function squareMeters (price, sqm) {
  const priceNumber = price.replace(/,/g, '')
  return priceNumber / sqm
}
