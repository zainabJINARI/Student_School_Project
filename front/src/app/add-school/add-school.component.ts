import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SchoolService } from '../services/school.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-school',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-school.component.html',
  styleUrl: './add-school.component.css'
})
export class AddSchoolComponent implements OnInit {

  schoolFormGroup!:FormGroup

  constructor(private formBuilder:FormBuilder,private schoolService:SchoolService,private route:Router){}
  ngOnInit(): void {
    this.schoolFormGroup= this.formBuilder.group({
      name:this.formBuilder.control("",[Validators.required]),
      abr:this.formBuilder.control("",[Validators.required])
    })
  }


  handleAddSchool(){
    this.schoolService.addNewSchool(this.schoolFormGroup.value)
    this.route.navigateByUrl('/school')
  }






}
