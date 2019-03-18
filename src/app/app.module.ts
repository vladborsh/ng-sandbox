import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DataService } from './services/data/data.service';
import { StoreModule } from "@ngrx/store";
import { reducer } from './app.state';
import { AccountService } from "./services/account/account.service";
import { CustomerService } from "./services/customer/customer.service";
import { SmartAccountComponent } from './components/account/smart-account/smart-account.component';
import { DumbAccountComponent } from './components/account/dumb-account/dumb-account.component';
import { SmartCustomerComponent } from './components/customer/smart-customer/smart-customer.component';
import { DumbCustomerComponent } from './components/customer/dumb-customer/dumb-customer.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartAccountComponent,
    DumbAccountComponent,
    SmartCustomerComponent,
    DumbCustomerComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducer)
  ],
  providers: [DataService, AccountService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
