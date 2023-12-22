// function myName(){         // ()--->execute
//     console.log("a")
//     console.log("a")

// }

// myName()


function addTwoNum(n1,n2){
    let d=n1+n2
    return d

    // cannot print after ret console.log(n1+n2)
}
// addTwoNum(3,7)
// addTwoNum(3,"a")

// const result=addTwoNum(2,4)
// console.log(result)


function loginUserMessage(userName="amka"){
    if(!userName){
        console.log("enter username")
        return 
    }
    return `${userName} just logged in `
}

// console.log(loginUserMessage())



/// ... rest/spread operator
// function calculateCart(val1,val2,...num1){
//     return num1
// }
// console.log(calculateCart(200,300,400,500,600))
const user={
    name:"abcdef",
    email:"Abcd@email.com"
}

function handleObject(anyObject){
    console.log(`user name is : ${anyObject.name} & user email is : ${anyObject.email}`)
}
 
handleObject(user)


const myNewArr=[200,300,400,500]
function returnSecondElement(anyArray){
    return anyArray[1]
}
console.log(returnSecondElement(myNewArr))