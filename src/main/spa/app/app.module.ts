import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { DataComponent }  from './data/data.component';
import { ViewerCesiumComponent }  from './viewer-cesium/viewer-cesium.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    DataComponent,
    ViewerCesiumComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
