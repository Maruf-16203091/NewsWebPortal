import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent {
  constructor(private _service:NewsapiservicesService) {
  }

  //display data
  sportsNewsDisplay:any = [];
  ngOnInit(): void {
    this._service.sportsNews().subscribe((result)=>{
      console.log(result);
      this.sportsNewsDisplay = result.articles;
    })
  }
}
