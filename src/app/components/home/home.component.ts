import { Component, OnInit } from '@angular/core';
import { AdService } from '../../services/ad.service';
import { UserService } from '../../services/user.service';

import { Ad } from '../../models/ad/ad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
 
  constructor(private adService: AdService, private router: Router, private service: UserService) { }

  ngOnInit()
  {        
    this.adService.GetAds(); 
    this.service.getUserProfile();
  }
 

  populateForm(ad: Ad) {       // метод обновляет данные во временном обьекте (adService.ad) типа Ad на основании обьекта выделенного из списка ad в представлении
    this.adService.ad = Object.assign({}, ad);   // Object.assign - предотвращает корректировку полей в
    this.adService.tempAdId = ad.Id;
    this.router.navigate(['/read-ad']);
  }  
}

