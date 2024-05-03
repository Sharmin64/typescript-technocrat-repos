{




// interface 
interface Abuser {
    name:string;
    age: number;
    role: string;
    isMarried:boolean;
}

const abuser:Abuser ={
name:'sharmin sultana',
age:70,
role:'Development learner',
isMarried:false,

}


// type 
type Fuser = {
    name: string;
    age:number;
    address:string;
}

type RoleWithFuser = Fuser & { role: string}

const fuser: RoleWithFuser={
    name:'safiya',
    role:'jhograte',
    age:60,
    address:'katla tola '
}


// const fuser: Fuser = {
//     name:'lizukha',
//     age:56, 
//     address:'kohekaf sohor',
// }

}