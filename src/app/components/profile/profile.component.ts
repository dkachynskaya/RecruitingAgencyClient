import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router} from '@angular/router';
import { AdService } from '../../services/ad.service';
import { Ad } from '../../models/ad/ad';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router, private service: UserService, private adService: AdService) { }

  ngOnInit() {      
    this.service.getUserProfile();
  }

  onLogout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('Login');  
    this.adService.ad=null;
    this.adService.ads=null;
    this.adService.moderAds=null;
    this.service.userDetails=null;
    this.service.usersDetails=null;
    this.router.navigate(['/login']);
  }

  addAd(){
    this.router.navigateByUrl('/ad-editor'); 
  }
  userManager(){
    this.router.navigateByUrl('/admin'); 
  }

  adModerator(){
    this.router.navigateByUrl('/moder'); 
  }

  onProfileEdit(){
    this.router.navigateByUrl('/edit-profile');
  }

  populateForms(ad: Ad) {       
    this.adService.ad = Object.assign({}, ad);   
    this.router.navigate(['/user-ads']);
  }

}
