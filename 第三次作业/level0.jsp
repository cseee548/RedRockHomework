let obj = new Object();
obj.name = 'qqq';
obj.age = '25';
console.log(obj);
let obj1 ={
    name: 'www',
    age: '30'
}
console.log(obj1);
function person(name,age){
    this.name = name
    this.age = age
    this.sayname = () =>{
    }
}
const p1 = new person('eee',30)
console.log(p1);
