import { Injectable } from '@angular/core';
import { Student } from '../models/Student';
import { Observable, of, throwError } from 'rxjs';
import { School } from '../models/School';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[]=[]
  constructor(){
    this.students=[
      {
          id: 1,
          fullname: "John Doe",
          email: "john.doe@example.com",
          year:'1st year',
          school:  undefined
      },
      {
          id: 2,
          fullname: "Jane Smith",
          email: "jane.smith@example.com",
          year:'1st year',
          school: undefined
      },
      {
          id: 3,
          fullname: "Alice Johnson",
          email: "alice.johnson@example.com",
          year:'1st year',
          school:  undefined
      },
      {
          id: 4,
          fullname: "Robert Brown",
          email: "robert.brown@example.com",
          year:'1st year',
          school:  undefined
      },
      {
          id: 5,
          fullname: "Emily Davis",
          email: "emily.davis@example.com",
          year:'1st year',
          school:  undefined
      }
  ];

  }


  getAllStudents():Observable<Student[]>{
    return of([...this.students])
  }

  getStudentById(id:number):Observable<Student>{
    let student = this.students.find((s)=>s.id==id)
    if(student){
      return of(student)
    }else{
      return throwError(()=>{new Error("Student not found")})
       
    }
   
  }

  addStudent(student:Student):Observable<boolean>{
    student.id=this.students.length+1
    this.students.push(student)
    return of(true)
  }


  setSchool(id:number,school:School){
   this.students= this.students.map((s)=>{
    if(s.id==id){
      s.school=school
    }
    return s

    })
    console.log(this.students)

  }
  
}
