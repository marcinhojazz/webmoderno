const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + (escola) + "!")
console.log('3' + 2)
console.log(escola.replace(3, 'e')) // substitua todos os dígitos pela letra 'E'

// console.log(escola.replace(/\w/g, 'e')) // comando regex substitui todas as letras pela letra 'E' escolhida (g - global)
// console.log(escola.replace(/\w/, 'e')) // comando regex substitui a primeira letra pela letra 'E' escolhida

console.log('Ana,Maria,Pedro'.split(/,/))

// String é uma cadeia de caracteres

