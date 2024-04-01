import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

export class Student {
  constructor(private name: string, private age: number, private group: string) {
  }
}
@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  myForm: FormGroup = new FormGroup({
    "name": new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")]),
    "age": new FormControl(0, [Validators.required, Validators.pattern("[1-9]{2}")]),
    "group": new FormControl('', Validators.required)
  })
  groups: string[] = ["IVT", "FIIT", "IBAS", "PMI"];
  stud: Student = new Student(this.myForm.getRawValue().name, this.myForm.getRawValue().age, this.myForm.getRawValue().group);
  @Output() sendForm = new EventEmitter<Student>();
  onSubmit() {
    this.stud = new Student(this.myForm.getRawValue().name, this.myForm.getRawValue().age, this.myForm.getRawValue().group);
    this.sendForm.emit(this.stud);
    console.log(this.stud);
  }
}
