import { Component } from '@angular/core';
import {JSONService} from "../../core/services/JSONService";


@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  providers: [JSONService],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {
  title = 'Third';
  constructor(private jsonService: JSONService) {
  }
  getData() {
    this.jsonService.loadData("assets/data.json");
  }
}

