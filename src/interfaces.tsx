export interface newData{
    firstName:string,
    lastName:string,
    description:string,
    age:number,
    pay:number,
    
}
export interface data extends newData{
    _id:string,
    __v:number
}
