import { Component, OnInit } from '@angular/core';
import * as sampleData from '../../../../assets/data.json';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data: any = sampleData['default'];
  header: any =this.data.header;


  constructor() { }

  ngOnInit(): void 
  {
    console.log(sampleData);
  }
   
}

