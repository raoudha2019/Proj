import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './mangement/users/users.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:"user",
    pathMatch:"full"
  },
  {
    path:"user",
    component:UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
