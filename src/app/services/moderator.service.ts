import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { ToastrService } from 'ngx-toastr';
import { AdService } from './ad.service';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {

  readonly rootUrl = 'http://localhost:63914/api/moderator';

  constructor(
    private http: HttpClient,
    private toastr: ToastrService, 
    private adService: AdService,) { }

 
  BlockAd(AdId: number) {
    console.log(AdId + " :adId");

    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer  ' + localStorage.getItem('access_token')});
    return this.http.get(this.rootUrl + "/block/ads/" + AdId, {headers: tokenHeader}).subscribe
    (
      (res:any) => {
        this.toastr.success('Ad Blocked');
        this.adService.GetAllAds();
        console.log("updated");
       },
      err => {
        console.log(err);
        this.toastr.error('HTTP status code', err.status);
      },
    );

  }

  UnblockAd(AdId: string) {

    console.log(AdId + " :AdId");
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer  ' + localStorage.getItem('access_token')});
    return this.http.get(this.rootUrl + "/unblock/ads/" + AdId, {headers: tokenHeader}).subscribe
    (
      (res:any) => {
        this.toastr.success('Ad Unblocked');
        this.adService.GetAllAds();
        console.log("updated");
       },
      err => {
        console.log(err);
        this.toastr.error('HTTP status code', err.status);
      },
    );



  }
}
