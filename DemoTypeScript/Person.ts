class Person{

    name:string;
    age:number;
    hobbies:string[];
    constructor(){
        this.name="Dipak";
        this.age=26;
        this.hobbies=[ "reading" ,"trekking","Playing video games"];
    }

    display(){
        console.log(this.name);
        console.log(this.age);
        this.hobbies.forEach(i=>{
            console.log(i);
        });
    }
}

let person=new Person();
person.display();
