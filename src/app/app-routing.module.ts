import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component'; 
import { HomeComponent } from './components/home/home.component';
import { ReadAdComponent } from './components/home/read-ad/read-ad.component';
import { LoginComponent } from './components/login/login.component'; 
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { ModeratorComponent } from './components/moderator/moderator.component';
import { AuthGuard } from './auth.guard';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { AdEditorComponent } from './components/ad-editor/ad-editor.component';
import { UserAdsComponent }  from './components/profile/user-ads/user-ads.component';


const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},   
    {path: 'home', component: HomeComponent }, 
    {path: 'read-ad', component: ReadAdComponent }, 
    {path: 'registration', component: RegisterComponent }, 
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
    {path: 'ad-editor', component: AdEditorComponent, canActivate:[AuthGuard]}, 
    {path: 'user-ads', component: UserAdsComponent, canActivate:[AuthGuard]},  //'user-post/:login/:id'
    {path: 'admin', component: AdminComponent, canActivate:[AuthGuard]},  
    {path: 'moder', component: ModeratorComponent, canActivate:[AuthGuard]},
    {path: 'edit-profile', component: EditProfileComponent, canActivate:[AuthGuard]},
    
    {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
