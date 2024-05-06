{
// Utility types 

// Pick 

type Person = {
    name:string;
    age:number;
    email?:string;
    contactNo:number
}


type NameAgeMail = Pick<Person, 'name'| 'age'| 'email'>



}