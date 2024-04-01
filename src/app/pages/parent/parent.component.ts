import { Component } from '@angular/core';
import {ChildComponent} from "../child/child.component";
import {Child2Component} from "../child2/child2.component";


@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    ChildComponent,
    Child2Component
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  title = "parent";
  students1: any[] = [];
  students2: any[] = [];
  onFormSaved1(data: any) {
    this.students1.push(data);
  }
  onFormSaved2(data: any) {
    this.students2.push(data);
  }

}
