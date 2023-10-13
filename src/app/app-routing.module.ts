import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes:Routes=[
  {path:'', redirectTo:'/dashboard',pathMatch:'full'},
  {path:'movies', component:MoviesComponent},
  {path:'dashboard', component:DashboardComponent}
]

@NgModule({
  exports:[RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
