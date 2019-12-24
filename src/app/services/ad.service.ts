import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AdEdit } from '../models/ad/ad-edit';

import { NgForm } from '@angular/forms';
import { Ad } from '../models/ad/ad';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  
  private adOnEdit: boolean=false;

  tempAdId: number = 0;
  moderAds:  Ad[] = null;
  ads: Ad[] = null;
  ad: Ad =null;
  readonly rootUrl = 'http://localhost:63914/api/ads';

  constructor(private http: HttpClient, private router: Router) { }

  GetAds() {
    // if (localStorage.getItem("Login") == null) {
       var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
       
       return this.http.get(this.rootUrl + '/ads', {headers:reqHeader}).
 
       subscribe((res: any) => {
           this.ads = res as Ad[]; 
         })
       }

    GetAdsById(AdId: number) {
        var tokenHeader = new HttpHeaders({'Authorization': 'Bearer  ' + localStorage.getItem('access_token')});           
           return this.http.get(this.rootUrl + '/' + AdId, {headers:tokenHeader}).
     
           subscribe((res: any) => {
               this.ad = res as Ad;                
             })
           }

  GetAllAds(){    
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer  ' + localStorage.getItem('access_token')});       
       return this.http.get(this.rootUrl + '/getalladsModer', {headers:tokenHeader}).
 
       subscribe((res: any) => {
           this.moderAds = res as Ad[];
       })
  }
   
   AddAd(data: any)  {  
      const formData: FormData = new FormData();   
      formData.append("Ad", btoa(data.value.positionDescription));   //шифруем HTML разметку перед отправкой utf-8
      formData.append("PositionName", data.value.positionName); 
      formData.append("Location", data.value.location); 
      formData.append("Company", data.value.company); 
    
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer  ' + localStorage.getItem('access_token')});
    return this.http.post(this.rootUrl+'/add/1', formData, {headers: tokenHeader});
  }
  
  EditAd(adId: number, form: NgForm) {
    const body: AdEdit = {
        PositionName: form.value.PositionName, 
        Location: form.value.Location,
        Company: form.value.Company,
        PositionDescription: form.value.PositionDescription,
        CategoryId: 1
       }
     var tokenHeader = new HttpHeaders({'Authorization': 'Bearer  ' + localStorage.getItem('access_token')});
      return this.http.put(this.rootUrl + '/'+ adId , body, {headers: tokenHeader});
  }


 DeleteAd(Id: number) {
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer  ' + localStorage.getItem('access_token')});
    return this.http.delete(this.rootUrl + '/' + Id, {headers: tokenHeader} );
  }  




 
 
}


