import { Component, OnInit } from '@angular/core';
import * as sampleData from '../../../assets/data.json';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any = sampleData['default'];
  carousel: any = this.data.carousel;
  attorneys: any = this.data.attorneys;
  services: any = this.data.services;
  experience: any =this.data.experience;


  constructor() { }

  ngOnInit(): void {
    console.log(sampleData);

  }

}
