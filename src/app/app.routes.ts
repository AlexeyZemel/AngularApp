import { Routes } from '@angular/router';
import { FirstComponent } from "./pages/first/first.component";
import { SecondComponent } from "./pages/second/second.component";
import { ThirdComponent } from "./pages/third/third.component";
export const routes: Routes = [
  { path: "", component: FirstComponent },
  { path: "second", component: SecondComponent },
  { path: "third", component: ThirdComponent },
  { path: "**", redirectTo: "/"}
];
