import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemosModule } from './demos/demos.module';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'demos', loadChildren:() => import('./demos/demos.module').then(m=>m.DemosModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
