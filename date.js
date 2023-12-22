let date= new Date()
console.log(date.toString())
console.log(date.toDateString())
console.log(typeof date)

let dateMy=new Date(2023,0,10)
console.log(dateMy.toLocaleString())
console.log(dateMy.getDay())

let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(dateMy.getTime())


console.log(Math.floor(Date.now()/1000))