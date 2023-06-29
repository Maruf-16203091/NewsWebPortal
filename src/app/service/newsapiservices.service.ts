import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=56c188ccbec84f26be1d703a2d2f5624";
  //technewsapiurl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=56c188ccbec84f26be1d703a2d2f5624";
  //technewsapiurl
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=56c188ccbec84f26be1d703a2d2f5624";
  //technewsapiurl
  entertainmentApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=56c188ccbec84f26be1d703a2d2f5624";
  //technewsapiurl
  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=56c188ccbec84f26be1d703a2d2f5624";
  //technewsapiurl
  healthApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=56c188ccbec84f26be1d703a2d2f5624";
  //scienceapiurl
  scienceApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=56c188ccbec84f26be1d703a2d2f5624";

  //topheading ()
  topHeading():Observable<any>
   {
    return this._http.get(this.newsApiUrl);
  }

  //technews
  techNews():Observable<any>
  {
   return this._http.get(this.techApiUrl);
 }
 businessNews():Observable<any>
  {
   return this._http.get(this.businessApiUrl);
 }
 entertainmentNews():Observable<any>
  {
   return this._http.get(this.entertainmentApiUrl);
 }
 sportsNews():Observable<any>
  {
   return this._http.get(this.sportsApiUrl);
 }
 healthNews():Observable<any>
  {
   return this._http.get(this.healthApiUrl);
 }
 scienceNews():Observable<any>
 {
  return this._http.get(this.scienceApiUrl);
}
}
