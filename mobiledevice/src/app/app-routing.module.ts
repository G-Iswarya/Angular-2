import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchrouterComponent } from './searchrouter/searchrouter.component';
import { WifisearchComponent } from './wifisearch/wifisearch.component';

const routes: Routes = [
  {path: '', redirectTo:'/wifisearch', pathMatch:'full'},
  {path: 'searchrouter', component: SearchrouterComponent},
  {path: 'wifisearch', component: WifisearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
