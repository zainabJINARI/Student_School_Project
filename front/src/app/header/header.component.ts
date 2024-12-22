import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor(private routerC:Router ){

  }

  goToStudentPage() {
    this.routerC.navigateByUrl('/students')

    
  }
  goToSchoolPage() {
    this.routerC.navigateByUrl('/school')

    
  }
  goToAssociatePage() {
    this.routerC.navigateByUrl('/associate')
  }

}
