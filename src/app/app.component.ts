import { Component } from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApp';

  constructor(private router: Router) {}
  goFirst(): void {
    this.router.navigateByUrl('/');
  }
  goSecond(): void {
    this.router.navigateByUrl('/second');
  }
  goThird(): void {
    this.router.navigateByUrl('/third');
  }
}
