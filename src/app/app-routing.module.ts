import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Demo01Component } from './demos/demo01/demo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';

const routes: Routes = [
  {
    path:'home', component: HomeComponent },
  { path:'demo01', component: Demo01Component },
  { path:'demo02', component: Demo02Component },
  { path:'demo03', component: Demo03Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
