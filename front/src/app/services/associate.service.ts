import { Injectable } from '@angular/core';
import { StudentService } from './student.service';
import { SchoolService } from './school.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  constructor(private studentService:StudentService,private schoolService:SchoolService) { }
  associateStudentSchool(student:number,school:number):Observable<boolean>{
    let valueSchool= this.schoolService.getSchool(school)
   
    this.studentService.setSchool(student,valueSchool)
    return of(true)
   

   
  }
}
