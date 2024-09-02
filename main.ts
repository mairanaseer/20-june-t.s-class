///oop//object oriented programming
//kse ek direction m bt krna orianted k mtlb//
//object k mtlb hr cheex object m hoge//
//1-class
//2-object ye 2 main cheeze hn
/*class Car {
name:string = "civic"
make:string = "honda"
year:number = 2024
}
///making an object
let mycar = new Car()
console.log(mycar);
///practice
class Person {
    ////class property
    name:string 
    age:number
    
constructor(n:string,a:number){ //////class ka function hota hai ye n parameter h 
        this.name = n   
        this .age = a 
          ////ye refer krta h class ki property ko
}
get detDetails():string{
return `my name is ${this.name} and my age is ${this.age}`
}
favfood(food:string):string{
    return `my name is ${this.name} and my age is ${this.age} and my fvrt food is ${food}`
}
}
let p = new Person("maira",20)
console.log(p.favfood("biryani"));*/
// inheritance    /////superclass ///base 
class Vehcile {
    engine:string
    tyres:number
    name:string
    constructor(e:string,t:number,n:string){
        this.engine = e
        this.tyres = t
        this.name = n
    }
} 
//child class
class Car extends Vehcile{
    constructor(engine:string,tyres:number,name:string){
  super(engine,tyres,name) 
 }
} 
let car = new Car("2800cc",4,"revo")
console.log(car);

///// practice
class motorbike extends Vehcile{
    constructor(engine:string,tyres:number,name:string){
        super(engine,tyres,name)
    }
}
let mb = new motorbike("70cc",7,"yamaha")
console.log(mb);














 




