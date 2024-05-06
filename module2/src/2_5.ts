{

// Fuction Generic


const createArray = (param:string) :string[]=>{
    return [param]
}
const createArrayWithGeneric = <T>(param:T) :T[]=>{
    return [param]
}

const res2= createArrayWithGeneric('Europ Continent')
console.log(res2);

const res1 = createArray('Asia Continent')

type User ={
    id:number; name:string;
}
const resGenericObj= createArrayWithGeneric<User>({id:79485, name:'Mis Hatun'})
console.log(res1);

// Generic function with tuple

const createArrayWithTuple = <T,Q>(param1:T,param2:Q) :[T,Q]=>{
    return [param1,param2]
}
// const createArrayWith = <T>(param:T) :T[]=>{
//     return [param]
// }

const res22= createArrayWithTuple<string,{name:string}>('Europ Continent',{
    name:'London'
})
// console.log(res2);

const res11 = createArrayWithTuple<string,number>('Asia Continent',60)

const addCourseToStudent= <T>(student:T)=>{
    const courseName= 'Next Level Web Development'

    return {
        ...student, courseName
      
    }
}
const student1= addCourseToStudent({name:'Mis Laltu',email:'laltu@gmail.com',devType:'NLWD'})
const student2=addCourseToStudent({name:'Mr.paltu',email:'paltu@gmail.com', hasWatch:'Vanga Ghori'})



const addTaskHomeWork =<T> (task:T) =>{
    console.log(task);
    
    const taskName= ' building block'

    return {
        ...task, taskName
       
    }
    
}



const taskOne= addTaskHomeWork({name:'ghorbari mosa',detail:'ghor jharu diye taerpor mosba', hasVacation:true})
const taskTwo= addTaskHomeWork({name:'ranna kora ar bagan poriskar kora ',salary:5000,isLeave:false})









// 
}