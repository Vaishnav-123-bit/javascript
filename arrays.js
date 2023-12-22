const arr=[1,2,3,4,5]
const hero=["abcdefg","pqrst"]
console.log(arr)
arr.push(6)

arr.unshift(0)
arr.shift()
console.log(arr.includes(9))
console.log(arr.indexOf(4))


const myarr= arr.join()
console.log(myarr)
console.log(typeof myarr)
//creates deep copies 
const newrr=arr.splice(0,3)
console.log(newrr)


const Arra=arr.slice(0,3)
console.log("--->",Arra)