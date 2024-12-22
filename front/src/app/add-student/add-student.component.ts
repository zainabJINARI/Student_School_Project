import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule,NgbModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent  implements OnInit{
  studentFormGroup! : FormGroup

  constructor(private studentServ:StudentService, private formBuilder:FormBuilder,private router:Router){

  }
  ngOnInit(): void {
    this.studentFormGroup =this.formBuilder.group({
      fullname:this.formBuilder.control("",[Validators.required,Validators.minLength(10),Validators.maxLength(50)]),
      year:this.formBuilder.control("",[Validators.required,Validators.maxLength(10)]),
      email:this.formBuilder.control("",[Validators.required,Validators.maxLength(20)]),
    
      

    })
  }
handleAddStudent() {
  this.studentServ.addStudent(this.studentFormGroup.value)
  this.router.navigateByUrl('/students')
}

}
