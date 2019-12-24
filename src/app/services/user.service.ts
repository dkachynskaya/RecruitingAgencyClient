import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { UserDetails } from '../models/user/user-details';
import { UserEdit } from '../models/user/user-edit';
import { ToastrService } from 'ngx-toastr';
import { ChangePassword } from '../models/user/change-password';

@Injectable({
  providedIn: 'root'
})
export class UserService {  

  constructor(private fb:FormBuilder,private http: HttpClient, private toastr: ToastrService) {     
  }
 
  editProfile: UserEdit = null ;
  editPassword: ChangePassword = null;

  userDetails : UserDetails =null;
  usersDetails : UserDetails[] =null;

  readonly BaseURI = 'http://localhost:63914/';  
  readonly rootUrl = 'http://localhost:63914/api/';

  formModel = this.fb.group({
    Login: ['',Validators.required],      
    Email: ['',Validators.email],
    FirstName: [''],
    LastName: [''],
    Passwords: this.fb.group({
      Password: ['',[Validators.required,Validators.minLength(6)]],
      ConfirmPassword: ['',Validators.required]
    }, { validator: this.comparePasswords })
  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {
      Login: this.formModel.value.Login,
      Email: this.formModel.value.Email,
      FirstName: this.formModel.value.FirstName,
      LastName: this.formModel.value.LastName,
      Password: this.formModel.value.Passwords.Password,
      ConfirmPassword: this.formModel.value.Passwords.ConfirmPassword
    };
   localStorage.removeItem('access_token');  
    return this.http.post(this.rootUrl + 'accounts/Register', body);
  }

  login(formData) {  

    var body = "username=" + formData.Login + "&password=" + formData.Password + "&grant_type=password";
    localStorage.removeItem('access_token');
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True'});
    return this.http.post(this.BaseURI + '/token', body, { headers: reqHeader });    
  }
 

  getUserProfile() {      
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer  ' + localStorage.getItem('access_token')});
    return this.http.get(this.rootUrl + 'users/profile', {headers: tokenHeader}).subscribe(
      (res:any) => {
        this.userDetails = res;
       },
      err => {
        console.log(err);
      },
    );
  }

  getAllUserProfiles() {      
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer  ' + localStorage.getItem('access_token')});
    return this.http.get(this.rootUrl + 'users/allprofiles', {headers: tokenHeader}).toPromise()
    .then(res => this.usersDetails = res as UserDetails[]);
  }

  GetUserByLogin(login: string) {
    
     var tokenHeader = new HttpHeaders({'Authorization': 'Bearer  ' + localStorage.getItem('access_token')});
      return this.http.get(this.rootUrl + 'users/' + login, { headers: tokenHeader });   
    
  }
    
  EditUserProfile()  {
  var tokenHeader = new HttpHeaders({'Authorization': 'Bearer  ' + localStorage.getItem('access_token')});
  return this.http.put(this.rootUrl + 'users/profile/edit', this.editProfile, { headers: tokenHeader });
  }

ChangePassword() {
  
   var tokenHeader = new HttpHeaders({'Authorization': 'Bearer  ' + localStorage.getItem('access_token')});
  return this.http.put(this.rootUrl + 'users/profile/password', this.editPassword, { headers: tokenHeader });
}

DeleteAccount() {
  var tokenHeader = new HttpHeaders({'Authorization': 'Bearer  ' + localStorage.getItem('access_token')});
  return this.http.delete(this.rootUrl + 'users/profile/delete', { headers: tokenHeader });
}

}
