import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";
import { QuillModule } from 'ngx-quill';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuard } from './auth.guard';
import { UserService } from './services/user.service'; 
import { ModeratorService } from './services/moderator.service';
import { AdminService }  from './services/admin.service';
import { AdService } from './services/ad.service';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component'; 
import { RegisterComponent } from './components/register/register.component'; 
import { HomeComponent } from './components/home/home.component';
import { ReadAdComponent } from './components/home/read-ad/read-ad.component';
import { LoginComponent } from './components/login/login.component'; 
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { ModeratorComponent } from './components/moderator/moderator.component';
import { AdminCommandsComponent } from './components/admin/admin-commands/admin-commands.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { AdListComponent} from './components/moderator/ad-list/ad-list.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component'; 
import { AdEditorComponent } from './components/ad-editor/ad-editor.component';
import { UserAdsComponent }  from './components/profile/user-ads/user-ads.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    RegisterComponent,
    HomeComponent,
    ReadAdComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    ModeratorComponent,
    AdminCommandsComponent,
    UserListComponent,
    AdListComponent,
    EditProfileComponent,
    AdEditorComponent,
    UserAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    QuillModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    UserService,
    AdminService,
    ModeratorService,
    AdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
