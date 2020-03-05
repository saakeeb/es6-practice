class Parent{
    constructor(){
        this.fatherName="Rahman Miah";
        this.motherName="Taramon BIbi";
        this.surName="Miah";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.childName=name;

    }
    getFullName(){
        return this.childName+" "+this.surName;
    }
}
const baby=new Child("Arnold");
const baby2=new Child("Abul");
console.log(baby.getFullName());
console.log(baby2);