import { Injectable } from '@angular/core';
import { School } from '../models/School';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class SchoolService {
  private school:School[]=[]

  constructor() { 
    this.school=[
      {
        id:1,
        name:"Ecole d'ingenieurie digital et d'inteligence artificel",
        abr:"EIDIDA"

      },
      {
        id:2,
        name:"Ecole of polytechnique ",
        abr:"EPS"

      }
    ]
  }

  getAllSchools():Observable<School[]>{
    return of(this.school)
  }

  

  getSchool(id:number):School{
  
    let school=this.school.find((s)=>s.id==id)
   
    if(school){

      return  school
    }else{
      return  {
        id:0,
        name:"",
        abr:""

      }
    }
    
  }
  addNewSchool( school:School ):Observable<boolean>{
    school.id=this.school.length+1
    this.school.push(school)
    return of(true)

  }
}
