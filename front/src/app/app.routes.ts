import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { SchoolComponent } from './school/school.component';
import { AddSchoolComponent } from './add-school/add-school.component';
import { AssociateComponent } from './associate/associate.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'students',component:StudentComponent},
    {path:'',component:HomeComponent},
    { path:'addStudent',component:AddStudentComponent},
    {path:'school',component:SchoolComponent},
    {path:'addSchool',component:AddSchoolComponent},
    {path:'associate',component:AssociateComponent}
];
