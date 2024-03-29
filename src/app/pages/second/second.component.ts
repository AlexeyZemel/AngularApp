import { Component } from '@angular/core';
import {ItalicDirective} from "../../core/directives/italic.directive";

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [ItalicDirective],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  title = 'Second';
  num: number = 5;

}
