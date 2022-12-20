//declare global array

let Students=[]

// create a class
class Student{
    constructor(){
        this.name=undefined;
        this.age=undefined;
        this.gender=undefined;
        this.location=undefined;
    }
    //add
    add(name,age,gender,location){
        let newRecord={
            name:name,
            age:age,
            gender:gender,
            location: location
        }
        //add to array
        Students.push(newRecord);
        console.log(Student[0]);
    }

    //list all student
    list(){
        Students.forEach(_student=>{
            console.log("Name : "+_student.name)
            console.log("Name : "+_student.age)
            console.log("Name : "+_student.gender)
            console.log("Name : "+_student.location)

        });
    }

    //edit


    
    //delete


}

student=new Student();
while(true){
    choice=parseInt(window.prompt("1. Add \n2.List"));

    //go to switch
    switch(choice){
        case 1:
            sName=window.prompt("Enter name: ");
            age=parseInt(window.prompt("Enter age"))
            location=window.prompt("Enter Gender : ")
            location=window.prompt("Enter location : ")
            student.add(sName,age,gender,location);
            console.log(student);
            break;
        case 2:
            student.list();
            console.log(student);
            break;
        default:
            alert("Invalid Input!")
    }

}