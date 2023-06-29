import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-healthnews',
  templateUrl: './healthnews.component.html',
  styleUrls: ['./healthnews.component.css']
})
export class HealthnewsComponent {
  constructor(private _service:NewsapiservicesService) {
  }

  //display data
  healthNewsDisplay:any = [];
  ngOnInit(): void {
    this._service.healthNews().subscribe((result)=>{
      console.log(result);
      this.healthNewsDisplay = result.articles;
    })
  }
}
