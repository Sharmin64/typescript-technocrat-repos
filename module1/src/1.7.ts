const  players1:string[]= [ 'naymer', 'mesi', 'ronaldo']

const players2:string[]=['ozil', 'suarez', 'Mular','fatu fatu']

players1.push(...players2)


console.log(players1, players2);




const meetTogather = ( ...bondhubandhob:string[]) =>{
    console.log(`hi ki horo ${players1} + ${players2}`);
    
bondhubandhob.forEach((bondhu:string)=> console.log(`Kire kamon asos ${bondhu}`)
)
}

meetTogather('bokul pagli','tapi pagli','liza pagli','mona pagli')
