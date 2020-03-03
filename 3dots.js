const a=[1,3,4,5,6,77,4];
const b=[2,4,6,8,90];
const c=[12,34,56,44];
const ages=[...a, ...b,...c, 6];
console.log(ages);

const min=650;
const mp=450;
const rp=350;
const takaPoisa=[650,450,350,45,670];
// const takaPoisa=Math.max(min, mp, rp);
const result=Math.max(...takaPoisa);
console.log(result);