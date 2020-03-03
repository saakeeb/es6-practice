class student{
    constructor(sId,sNature, sName ){
        this.id=sId;
        this.nature=sNature;
        this.name=sName;
        this.school="Prem Nagar School"
    }
}

const student1=new student(1, "cool", "rahim");
const student2=new student(2, "hot", "Kahim");
const student3=new student(3,"romantic", "jahim" );

console.log(student1, student2, student3);

