//declaration
interface IEmployee{
    empCode:number;
    empName:string;
    getSalary: (empCode:number)=>number;
}
//enum
enum Role{ ADMIN=1, MANAGER=2, COORDINATOR=3}

//class
class PermanentEmployee implements IEmployee{
    //instance variables
    empCode: number=0;
    empName: string='';

    //additional data fields
    role:any=Role.ADMIN;
    isContract:boolean=false;

    //constructor
    constructor(_code:number,_name:string){

        this.empCode=_code;
        this.empName=_name;
    }
    //implementation

    getSalary(empCode: number): number{
        return 75000;
    }
    //custom methods
    getWages(){
        console.log("hourly rate is "+ 1000);
    }

}
//EntryPoint
let emp=new PermanentEmployee(1001,'Mark');
console.log(emp.empName);
console.log(emp.getSalary(1001));
console.log(emp.getWages());
console.log(emp.isContract);
console.log(emp.role);