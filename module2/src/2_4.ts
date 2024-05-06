{

// 

    interface Developer <T,B=null>{
        name:string;
        computer:{
            brand:string;
            model:string;
            releaseYear:number
        }
        smartWatch:T,
        bike?:B
    }
interface AppleWatch {
    brand:string;
    model:string;
    heartTrack:boolean;
    sleepTrack:boolean;
}

interface SplinterBike{
    model:string;
engineCapacity:number
}
    const richDeveloper:Developer<AppleWatch, SplinterBike> ={
        name:'lizar husband',
        computer:{
            brand:'HP',
            model:'X-255UR',
            releaseYear:2019
        },
        smartWatch:{
            brand:'apple Watch',
            model:'Vh09',
            heartTrack:true,
            sleepTrack:true

        },
        bike:{
model:'Splinter',
engineCapacity:500
        }
    }

    interface EmilabWatch{
        brand:string;
        model:string;
        display:string;
    }

    const poorDeveloper:Developer<EmilabWatch > ={
        name:'liza',
        computer:{
            brand:'Asus',
            model:'X-255UR',
            releaseYear:2014,
        },
        smartWatch:{
            brand:'emilab',
            model:'kw66',
            display:'Oled'
        }
    }
}