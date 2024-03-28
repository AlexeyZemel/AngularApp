import { Routes } from '@angular/router';
import { FirstComponent } from "./pages/first/first.component";
import { SecondComponent } from "./pages/second/second.component";
import { ThirdComponent } from "./pages/third/third.component";
import {confirmGuard} from "./app.component";
export const routes: Routes = [
  { path: "", component: FirstComponent, canActivate: [confirmGuard]},
  { path: "second", component: SecondComponent, canDeactivate: [confirmGuard] },
  { path: "third", component: ThirdComponent },
  { path: "**", redirectTo: "/"}
];
