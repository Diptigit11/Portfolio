// console.log("dipti");
// console.log(6+8)
let name="dipti";
let middle_name="rabindra";
let sir_name="singh";
console.log(`hello my name is ${name} ${middle_name} ${sir_name}`)
// console.table([name, middle_name ,sir_name])
// alert("hello")
// let age=78;
// console.log(typeof age)
// let new_age=String(age)
// console.log(typeof new_age)
// let num="";
// let nuumm=Boolean(num)
// console.log(nuumm)

// let num="a";
// let nuumm=Number(num)
// console.log(nuumm)

// let num = (89);
// console.log(num.toString().length)
// console.log(num.toFixed(4))

// console.log(Math.floor((Math.random() *10) +1  ));//this will give input from 1 to 0 
// //but if we asked for the range of min to max
// let min =10;
// let max=26;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);//formula to print random in the given range

// let mydate=new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());


let agesum = ()=>{
    let age=18;
console.log(`Age is ${this.age}`);
console.log(this);
}
age=20;
agesum();