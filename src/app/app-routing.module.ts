import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { SciencenewsComponent } from './sciencenews/sciencenews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';

const routes: Routes = [
{path: '',component:TopheadingComponent},   //home
{path: 'tech',component:TechnewsComponent},   //techNews
{path: 'business',component:BusinessnewsComponent},   //business
{path: 'health',component:HealthnewsComponent},   //health
{path: 'science',component:SciencenewsComponent},   //science
{path: 'sports',component:SportsnewsComponent},   //sports
{path: 'entertainment',component:EntertainmentnewsComponent},   //entertainment

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
