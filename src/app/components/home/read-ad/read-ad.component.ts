import { Component, OnInit } from '@angular/core';
import { AdService } from '../../../services/ad.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-read-ad',
  templateUrl: './read-ad.component.html',
  styleUrls: ['./read-ad.component.css']
})
export class ReadAdComponent implements OnInit {

  private userLogin: string = '';

  constructor(private adService: AdService, private toastr: ToastrService) { }

  ngOnInit() {
   this.userLogin =this.adService.ad.User.Login;
  }

  AutorizeCheck() {
    return (localStorage.getItem('access_token') === null)
  }
}
