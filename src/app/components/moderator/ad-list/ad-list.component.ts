import { Component, OnInit } from '@angular/core';
import { AdService } from '../../../services/ad.service';
import { UserService } from '../../../services/user.service';
import { ModeratorService } from '../../../services/moderator.service';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit { 

  constructor(private adService: AdService,
    private service: UserService, private moderService: ModeratorService) { }

  ngOnInit() {
    this.adService.GetAllAds();
  }
  

}
