//function overloading

function add(strOne: string,strTwo: string): string;

function add(numOne:number,numTwo:number):number;

function add(numOne: number,numTwo: number,strOne?:string):number;//?nullable true

// implementation
function add(paramOne:any,paramTwo:any):any{
    return paramOne+paramTwo;
}

//calling function
console.log(add(100,200));
console.log(add('Dipak',' Jadhav'));
