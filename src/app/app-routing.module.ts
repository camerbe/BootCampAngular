import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ExosComponent } from './exos/exos.component';
import { Ex01Component } from './exos/ex01/ex01.component';

const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path:'home', component: HomeComponent },
  { path:'exos', component:ExosComponent,
    children:[
      {path:'ex01',component:Ex01Component}
    ],
  },
  { path:'demos',component:DemosComponent,
    loadChildren:() => import('./demos/demos.module').then(m=>m.DemosModule)
  },
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
