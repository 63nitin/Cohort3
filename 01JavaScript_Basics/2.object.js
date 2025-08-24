
let user = {
    fname: "Nitin",
    age: 20,
    gender: "Male"
}

function greet(obj){
    let slang = "Mr.";
    if(obj.gender === "female"){
        slang= "Ms.";
    }
    console.log(`Hello ${slang} ${obj.fname} your age is ${obj.age}   `)
}

greet(user)