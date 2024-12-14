import { School } from "./School";

export interface Student{
    id:number,
    fullname:string,
    email:string,
    year:string,
    school?:School | undefined

}