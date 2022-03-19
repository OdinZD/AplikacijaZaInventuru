import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { InventuraDashboardComponent } from './inventura-dashboard/inventura-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'inventura', component:InventuraDashboardComponent},
 
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
