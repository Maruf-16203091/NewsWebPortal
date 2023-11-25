import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-entertainmentnews',
  templateUrl: './entertainmentnews.component.html',
  styleUrls: ['./entertainmentnews.component.css']
})
export class EntertainmentnewsComponent {
  constructor(private _service:NewsapiservicesService) {
  }

  //display data
  entertainmentNewsDisplay:any = [];
  ngOnInit(): void {
    this._service.entertainmentNews().subscribe((result)=>{
      console.log(result);
      this.entertainmentNewsDisplay = result.articles;
    })
  }
}
//testing