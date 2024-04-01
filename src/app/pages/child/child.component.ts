import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";


export class Student {
  constructor(private name: string, private age: number, private group: string) {
  }
}
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  title = "child";
  name = "";
  age = 0;
  group = "";
  stud: Student = new Student(this.name, this.age, this.group);
  groups: string[] = ["IVT", "FIIT", "IBAS", "PMI"];

  @Output() sendForm = new EventEmitter<Student>();

  onSubmit(form: NgForm) {
    this.stud = new Student(this.name, this.age, this.group);
    this.sendForm.emit(this.stud);
    console.log(this.stud);
  }
}
