import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent {
  constructor(private _service:NewsapiservicesService) {
  }

  //display data
  businessNewsDisplay:any = [];
  ngOnInit(): void {
    this._service.businessNews().subscribe((result)=>{
      console.log(result);
      this.businessNewsDisplay = result.articles;
    })
  }
}