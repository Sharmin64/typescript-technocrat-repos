const abuser = {
    id:335, 
    name:{
        firstName:'sharmin',
        middleName:'Sultana',
        lastName:'Lizukha'
    },
    contactNo:'017*******',
    address:'Switzerland'
}

const {contactNo,
    name:{
        middleName
    },
}=abuser



//* Array destracturing 


const myBondhu = ['chondol','monu','vanu','tepi','dhepi','vodor']

const [,  , valoBondhu,...rest] = myBondhu

console.log(myBondhu);
