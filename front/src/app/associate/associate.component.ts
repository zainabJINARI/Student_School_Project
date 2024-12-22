import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AssociateService } from '../services/associate.service';
import { StudentService } from '../services/student.service';
import { SchoolService } from '../services/school.service';
import { NgFor } from '@angular/common';
import { Student } from '../models/Student';
import { School } from '../models/School';

@Component({
  selector: 'app-associate',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './associate.component.html',
  styleUrl: './associate.component.css'
})
export class AssociateComponent  implements OnInit{
  schools!: School[];
  students!: Student[];

  formGroupAssociate!:FormGroup

  constructor(private formBuilder:FormBuilder,private associateService:AssociateService,private studentService :StudentService,private schoolService:SchoolService ){}
  ngOnInit(): void {
    this.formGroupAssociate= this.formBuilder.group({
      idSchool:this.formBuilder.control("",[Validators.required]),
      idStudent:this.formBuilder.control("",[Validators.required])
    })
    this.schoolService.getAllSchools().subscribe({
      next:(data)=>{
        this.schools=data

      }
    })

    this.studentService.getAllStudents().subscribe({
      next:(data)=>{
        this.students=data

      }
    })
  }

  handleAssociateSchool() {
  
    this.associateService.associateStudentSchool(this.formGroupAssociate.value.idStudent,this.formGroupAssociate.value.idSchool).subscribe({
      next:()=>alert('Student Associated Succheesfully')
    })

    
  }
}
