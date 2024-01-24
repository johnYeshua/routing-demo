import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing_demo';
}
