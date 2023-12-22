const user={
    userName:"abc",
    price:999,
    welcomeMessgae:function(){
        console.log(`${this.userName} , welcome`)
        console.log(this)
    }
}
// user.welcomeMessgae()
// console.log(this)

// function chai(){
//     const usrName="abc"
//     console.log(this.usrName)      // _______> cannot use this 
// }

// chai()


const chain=()=>{
    const userName="abc"
    console.log(this)
}
chain()