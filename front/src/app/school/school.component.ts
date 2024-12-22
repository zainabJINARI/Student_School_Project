import { Component, OnInit } from '@angular/core';
import { School } from '../models/School';
import { SchoolService } from '../services/school.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-school',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './school.component.html',
  styleUrl: './school.component.css'
})
export class SchoolComponent  implements OnInit{
  schools:School[]=[]
  erroMessage!:string
  constructor( private schoolService:SchoolService){}
  ngOnInit(): void {
    this.schoolService.getAllSchools().subscribe({
      next:(data)=>{
        this.schools=data

      },
      error:(error)=> this.erroMessage=error
    })
  }


}
