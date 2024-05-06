{
//conditional type 

    type bee = null;
type firefly = string;


type butterfly = bee extends null ? true :false; //conditional type

type zoo = bee extends null ?true : firefly extends string? string : undefined //nested conditional type


type Sheikh = {
    bike:string ; 
    car:string;
    ship:string;
    plane:string;
}
 
type CheckVehicle<T> = T extends keyof Sheikh? true:false 
type HasPlane = CheckVehicle<'cycle'>

}
