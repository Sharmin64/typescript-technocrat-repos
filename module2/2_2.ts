{

// interface 

type User1= {
    name:string;
    age:number
}

interface User2 {
    name:string;
    age:number;
}

type UserWithRole1 = User1 & {role : string}

interface UserWithRole2 extends User2 {
    role: string
}

const user1 : UserWithRole2= {
    name: 'sharmin',
    age:50, 
    role:'developer'

}








}