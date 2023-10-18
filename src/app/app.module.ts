import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SearchrouterComponent } from './searchrouter/searchrouter.component';
import { WifisearchComponent } from './wifisearch/wifisearch.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConnectedComponent } from './connected/connected.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchrouterComponent,
    ConnectedComponent
    
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    WifisearchComponent,
    FormsModule,
    CommonModule
    
  ],
  exports:[NgxSpinnerModule, WifisearchComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
