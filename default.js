
function add(num1, num2){
    num1=num1|| 11;
    num2=num2|| 22;
    return num1+num2;
}
const result= add(4);
console.log(result);

function createUser(name=22, age = 18){
        const user = {};
        user.name ;
        user.age ;
        return user;
    }
console.log(createUser);