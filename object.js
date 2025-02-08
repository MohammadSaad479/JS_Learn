
const obj1 = {
    1 : "a",
    2 : "b",
    3 : "c",
}

const obj2 = {

    4 : "d",
    5 : "e",
    6 : "f",
}

// const obj3 = {...obj1, ...obj2}  // spreading

// const obj3 = Object.assign({}, obj1, obj2)  
// console.log(obj3);

// objects in arrray

const newUsers =[
    {
        name : "saad",
        age : "24",
        gender : "male",
        
    },
    {},
    {},
    {},
]

newUsers[1].name // print any object from array

// De- Structure

const course = {

    name : "Jslearn",
    price: "99",
    tutor : "saad",
}

const {tutor : teacher} = course

console.log(teacher);

