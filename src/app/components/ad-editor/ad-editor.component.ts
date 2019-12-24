import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdService } from  '../../services/ad.service'; 
 
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ad-editor',
  templateUrl: './ad-editor.component.html',
  styleUrls: ['./ad-editor.component.css']
})
export class AdEditorComponent implements OnInit {
 
  constructor(private adService: AdService, private router: Router, private toastr: ToastrService) { }

    ngOnInit() { }

    onSubmit(form: NgForm) {    
        this.adService.AddAd(form).subscribe((data: any) => {
          this.router.navigate(['/profile']);
        })
            
       }
     maxLength(e) {
      if(e.editor.getLength() > 10000) {
      e.editor.deleteText(10, e.editor.getLength());
      }
    }

}
