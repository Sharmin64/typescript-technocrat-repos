// Learning function

// Normal Function 
// Arrow Function 

function add (num1:number , num2: number):number{
    return num1 + num2; 
}

add( 1, 43)

const addArrow = (num1:number, num2:number):number => num1+ num2;


// Object --> Function --> Method


const richUser= {
    name : 'Sharmin',
    balance : 6000000,
    addBalance( balance: number):string{
        return `My new balance is : ${this.balance + balance}`
    }
}


const arr : number[] = [3, 6, 7]

const newArr:number[]= arr.map((elem: number):number=>elem*elem)
console.log(newArr);
