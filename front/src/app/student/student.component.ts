import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Student } from '../models/Student';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [NgFor,NgIf,RouterModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {

public students: Student[]=[];
constructor( private studentService:StudentService){}
ngOnInit(): void {
  this.studentService.getAllStudents().subscribe({
    next:(data)=>{
      this.students=data

    },
    error:(error)=>{
      console.log(error)
    }
  })
  
}

}
