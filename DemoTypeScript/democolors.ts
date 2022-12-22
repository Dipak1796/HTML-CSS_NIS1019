//...
//declare function
let displayColors=function(msg:string, ...colors:any){
    console.log(msg);
    console.log(colors);
}

//calling function
let message="List of Colour";
displayColors(message,'Red');
displayColors(message,['Red','Blue']);
displayColors(message,['Red','Black','White']);