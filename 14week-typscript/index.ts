// // interfaces

// interface Address {
//     street: string;
//     city: string;
//     country: string;
//     pincode: number;
// }

// interface User{
//     name: string;
//     age: number;
//     email: string;
//     address: Address;
// }


// interface Employee {
//     name: string;
//     age: number;
//     email: string;
//     address: Address;
// }

// interface People {
//     name: string,
//     age: number,
//     // greet: () => string,
//     // greet2(): string,
// }

// // let person: People ={
// //     name: "Nitin",
// //     age: 21,
// //     greet: () => {
// //         return "Hii"
// //     },
// //     greet2() {
// //         return "Hello"
// //     }
// // }

// // let greeting = person.greet()

// // console.log(greeting);

// // classses

// class Manager implements People {
//     name: string;
//     age : number;
//     number: string;

//     constructor (name: string, age: number){
//         this.name = name;
//         this.age = age;
//         this.number = "12254444"
        
//     }
// }

// let user = new Manager("john", 30);

// console.log(user)



// Arrays


// function getMax(nums: number[]): number {
//   if (nums.length === 0) {
//     throw new Error("Array must not be empty");
//   }

//   let maxValue = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > maxValue) {
//       maxValue = nums[i];
//     }
//   }

//   return maxValue;
// }


// prerequisit for advance

// interface User {
//   name: string;
//   age: number;
// }

// function sumOfAge(user1: User, user2: User){
//   return user1.age + user2.age;
// }

// const result = sumOfAge({name: "Nitin", age: 21}, {name: "harkirat", age: 25});

// console.log(result);

// pick

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   age: number;
//   password: string;
// }

// type UpdatedUser = Pick<User, "name" | "age" | "email">;

// Partial

// interface User {
//   name: string;
//   age: number;
//   email: string;
//   password: string
// }

// type updatedUser = Pick<User, "name" | "age" | "email">;

// type partialUser = Partial<updatedUser>

// function updateUserData(updatedProps: partialUser){

// }

// updateUserData({
//   name: "nitin",
//   age : 25
// })


// ReadOnly property inside the object

interface User {
  readonly name: string;
  readonly age: number;
}

let user : User = {
  name: "Nitin",
  age: 25
}

// user.age = 36   can't use read only