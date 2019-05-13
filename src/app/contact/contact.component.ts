import { Component, OnInit } from '@angular/core';
import { CrudeserviceService } from '../crudeservice.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
services: any = {};
information: any = {};
model: any = {};
gettingdata: any = [];

  constructor(private enqService: CrudeserviceService) {
    this.services = [{heading: 'Contact Information'}];
    this.information = [
      {
        p: 'dsad',
        details: 'nasdndnssa',
        img: 'htmlcss.jpg'

      },
      {
        p: 'dsad',
        details: 'nasdndnssa',
        img: 'htmlcss.jpg'

      },
      {
        p: 'dsad',
        details: 'nasdndnssa',
        img: 'htmlcss.jpg'

      },
      {
        p: 'dsad',
        details: 'nasdndnssa',
        img: 'htmlcss.jpg'

      },
      {
        p: 'dsad',
        details: 'nasdndnssa',
        img: 'htmlcss.jpg'

      }
    ];

   }

  ngOnInit() {
  }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this.enqService.saveEnquiries(this.model).subscribe(data => {
      console.log(data);
    });
    }
    getDetails() {
      this.enqService.getAllEnquiries().subscribe(data => {
        this.gettingdata = data;
        console.log(data);
        // if ( this.gettingdata < 1) {
        //   $('#gettable').css('display', 'none');
        // } else {
        //   $('#gettable').css('display', 'block');
        // }
      });
     }
    }


