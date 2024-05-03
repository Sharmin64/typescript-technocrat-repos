{

type GenericArray<T> = Array<T>


    // const rollNumbers :Array< number> = [3,6,8]
    const rollNumbers :GenericArray< number> = [3,6,8]


    // const mentors : Array<string> = ['Mr. karpa', 'Ms mortal', 'Mis chalak polapain']
    const mentors : GenericArray<string> = ['Mr. karpa', 'Ms mortal', 'Mis chalak polapain']
     
    
    // const boolArray : Array<boolean> = [true, false, true]
    const boolArray : GenericArray<boolean> = [true, false, true]
    
const customer:GenericArray <{name:string, age:number, isAlive ?:boolean}> =[
    {name:'Khatun ', age:80,}, {name:'ammu',age:60 ,isAlive:false}
]

// Generic Tuple

type GenericTuple<X, Y> = [X, Y]

const voot : GenericTuple<number,{name:string,email:string,isDead:boolean} > = [ 
    5445, {name: 'kaylla voot', email: 'gorosthan@dmail.com',isDead:true}
]



}