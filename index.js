let num1 = 1;
let num2 = 62;

function multiplynumbers(){
    //let num1 = 1;
    //let num2 = 62;
    return num1*num2;
}

let multiply = multiplynumbers();

function randomGenerator(){
    let returnVal = Math.ceil(Math.random()*10)+1;
    return returnVal;
}

let random = randomGenerator();

let num3 = 9;
let num4 = 5;
function modNumber(){
    return num3%num4;
}
let mod = modNumber();

function maxInSet(){
    return Math.max(1,2,3,4,20);

}

let max = maxInSet();