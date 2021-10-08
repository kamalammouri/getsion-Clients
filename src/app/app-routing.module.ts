import { SettingComponent } from './components/setting/setting.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailClientComponent } from './components/detail-client/detail-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {path:"",component:DashbordComponent,canActivate:[AuthGuardGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"client/add",component:AddClientComponent,canActivate:[AuthGuardGuard]},
  {path:"client/edit/:id",component:EditClientComponent,canActivate:[AuthGuardGuard]},
  {path:"client/:id",component:DetailClientComponent,canActivate:[AuthGuardGuard]},
  {path:"settings",component:SettingComponent,canActivate:[AuthGuardGuard]},
  {path:"**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuardGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
