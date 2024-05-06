{
    // Constrains

    const addCourseToStudent= <T extends {id:number;name:string;email:string}>(student:T)=>{
        const courseName= 'Next Level Web Development'
    
        return {
            ...student, courseName
          
        }
    }
const student3 = addCourseToStudent({
    id:7908,name:'hiorefk',email:'ere@gmail.com',amiKhabo:true
})

    const student1= addCourseToStudent<{
        id:number;
        name:string;
        email:string;
        devType:string
    }>({
        id:566,
        name:'Mis Laltu',
        email:'laltu@gmail.com',
        devType:'NLWD'})
    const student2=addCourseToStudent<{
        id:number;
        name:string;
        email:string;
        hasWatch:boolean
    }>(
        {
        id:677,    
        name:'Mr.paltu',
        email:'paltu@gmail.com',
        hasWatch:true
        })



}