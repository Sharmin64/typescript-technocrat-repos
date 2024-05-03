{

    const kgToGm = (value: string | number): string | number | undefined => {
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value)*1000; 
            return `The converted value is : ${convertedValue}`
        }
        if(typeof value === 'number'){
            return value*1000
        }
    }
    
    const output1 = kgToGm(1000) as number
    const output2 = kgToGm('ondho bissas kano korse na nijer motoi kaj korse ') as number
    console.log( typeof output1);
    console.log(typeof output2);
    
    

    function meetSomeOne (guy: string){
        console.log('Hi kamon aso', guy.toUpperCase() + '!!')
    }

    
meetSomeOne('ayan faris')

}