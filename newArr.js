const hero=[1,2,3,4]
const nexHer=[6,7,8,9]

const newHero=hero.concat(nexHer)
console.log(newHero)


//spread operator
const all_new=[...hero,...nexHer]
console.log(all_new)

//

const another_array=[1,2,[3,4],5,6,[7,8,[9]]]

const realArr=another_array.flat(Infinity)
console.log('--->',realArr)


console.log(Array.isArray("abcdefgh"))
console.log(Array.from("abcdefgh"))