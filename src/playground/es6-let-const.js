var nameVar = 'Evan'
var nameVar = 'Kim'
// you can reassign var variables
// var with kim overrides var with Evan
console.log('nameVar', nameVar)

let nameLet = 'Rom'
nameLet = 'Rommy'
// just like var, let variables can be reassigned, but they cannot be redefined
console.log('nameLet', nameLet)

const nameConst = "Frank"
// with const you can't redefine the variable nor reassign
console.log('nameConst', nameConst)

var fullName = 'Evan Kim'
let firstName
if (fullName) {
  firstName = fullName.split(' ')[0]
  console.log(fullName, 'first name is : ', firstName)

}
// console.log(fullName, 'first name is : ', firstName) won't work because of block scope
console.log(fullName, 'first name is : ', firstName)

