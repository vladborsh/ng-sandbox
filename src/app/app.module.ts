import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YenComponent } from './components/yen/yen.component';
import { UsdComponent } from './components/usd/usd.component';

@NgModule({
  declarations: [
    AppComponent,
    YenComponent,
    UsdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
