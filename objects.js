const mySym=Symbol("abcdef")

const object={
    name:"abc",
    email:"abc@email.com",
    [mySym]:"12345"
}

console.log(object.email)
console.log(object[mySym])
console.log(typeof object[mySym])

object.email="abC@email.com"
console.log(object.email)
// Object.freeze(object.email)
object.email="SBCC@email.com"
console.log(object)

object.greeting=function(){
    console.log(`hello, ${this.email}`)
}

object.greeting2=function(){
    console.log(`hello`)
}
console.log(object.greeting())
console.log(object.greeting2())


