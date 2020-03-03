function doubleIt(num=8){
    return num*2;

}
const result=doubleIt();
console.log(result);

const doubleIt1=function fun(num=2){
    return num*2;
}
const result1=doubleIt1(6);
console.log(result1);

const double2=num=>num*2;
const result2=double2(4);
console.log(result2);

const double3=(x,y)=>x+y;
const result3=double3(33,44);
console.log(result3);

const give5=()=>5;
const result4=give5();
console.log(result4);

const doMath=(x,y)=>{
    const sum=x+y+3;
    const diff=x-y-1;
    const result=sum*diff*2;
    return result;
}
const result5=doMath(5,2);
console.log(result5);