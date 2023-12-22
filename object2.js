const user = new Object();
user.id = "1234";
user.name = "abC";
user.isLoggedIn=false
// console.log(user)

const regularUser = {
  email: "abc@email.com",
  fullName: {
    name: "amka",
    surName: "dhamka",
  },
};
// console.log(regularUser.fullName)

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

// const obj3=Object.assign({},obj1,obj2)  //{} --> for giving empty space
// console.log(obj3)

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const arr = [
  {
    email: "abc@email.com",
    name: "abc",
  },
  {
    email: "abcdef@email.com",
    name: "abcD",
  },
  {
    email: "abcdefghi@email.com",
    name: "abcDE",
  },
];


// console.log(arr[1].email)

// console.log(Object.keys(user))   // ----->incoming data into array forat 
// console.log(Object.values(user))
// console.log(Object.entries(user))
// console.log(user.hasOwnProperty('isLoggedIn'))




/*Destructuring */

const course={
    courseName:"JS",
    price:"999",
    courseInstructor:"AB"
}

const{courseInstructor:instructor}=course
console.log(instructor)

