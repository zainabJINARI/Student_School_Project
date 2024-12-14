import { Component } from '@angular/core';
import { RouterOutlet ,Router,RouterModule} from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'front';

  constructor(private routerC:Router ){

  }

  goToStudentPage() {
    this.routerC.navigateByUrl('/students')

    
  }
}
