import { Component, OnInit } from '@angular/core';
import { AdService } from '../../../services/ad.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-ads',
  templateUrl: './user-ads.component.html',
  styleUrls: ['./user-ads.component.css']
})
export class UserAdsComponent implements OnInit {

  private adOnEdit:boolean=false;

  constructor(private adService: AdService, private router: Router,private toastr: ToastrService) {}

  ngOnInit() {
  }

  OnEditAd(form:NgForm) {
    this.adService.EditAd(this.adService.ad.Id, form).subscribe((data: any) => {
        this.adOnEdit = false;
        this.toastr.success('Ad edited');
        },
        Error => {console.log(Error);
          this.toastr.error('HTTP status code', Error.status);
        });
  }


  OnDeleteAd() {
    this.adService.DeleteAd(this.adService.ad.Id).subscribe((data: any) => {
      this.toastr.success('Ad deleted');
        this.router.navigate(['/profile']);
      },
      Error => {console.log(Error);
        this.toastr.error('HTTP status code', Error.status);
      });
 }

  

}
