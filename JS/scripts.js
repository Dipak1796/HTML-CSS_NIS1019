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
        Students.forEach(student=>{
            console.log("Name : "+student.name);
            console.log("Name : "+student.age);
            console.log("Name : "+student.gender);
            console.log("Name : "+student.location);

        });
    }

    //edit
    edit(id,name,location){
        Students[id].name=name;
        Students[id].location=location;
        console.log(Students[id]);
    }

    
    //delete
    delete(){
        Students.pop();
    }

}

students=new Student();
while(true){
    choice=parseInt(window.prompt("1. Add \n2. List\n3. Edit\n4. Delete"));

    //go to switch
    switch(choice){
        case 1:
            sName=window.prompt("Enter name: ");
            age=parseInt(window.prompt("Enter age"));
            gender=window.prompt("Enter Gender : ");
            slocation=window.prompt("Enter location : ");
            students.add(sName,age,gender,slocation);
            console.log(students);
            break;
        case 2:
            alert(1);
            students.list();
            console.log(students);
            break;
        case 3:
            sid=parseInt(window.prompt("Enter index number"));
            sName=window.prompt("Enter the name");
            slocation=window.prompt("Enter the location");
            students.edit(sid,sName,slocation);
            console.log(students);
            break;
        case 4:
            students.delete();
            console.log(students);
            break;
        default:
            alert("Invalid Input!");
    }
    let bool=prompt("do you want to continue(y/n)?");
    if(bool.charAt(0)=='n'|| bool.charAt(0)=="N")
    {
        choice=false;
    }

}