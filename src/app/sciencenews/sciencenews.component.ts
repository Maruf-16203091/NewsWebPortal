import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-sciencenews',
  templateUrl: './sciencenews.component.html',
  styleUrls: ['./sciencenews.component.css']
})
export class SciencenewsComponent {
  constructor(private _service:NewsapiservicesService) {
  }

  //display data
  scienceNewsDisplay:any = [];
  ngOnInit(): void {
    this._service.scienceNews().subscribe((result)=>{
      console.log(result);
      this.scienceNewsDisplay = result.articles;
    })
  }
}
