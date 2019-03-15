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
<<<<<<< HEAD
import { CardsComponent } from './components/cards/cards.component';
=======
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90

@NgModule({
  declarations: [
    AppComponent,
    SmartAccountComponent,
    DumbAccountComponent,
    SmartCustomerComponent,
<<<<<<< HEAD
    DumbCustomerComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
=======
    DumbCustomerComponent
  ],
  imports: [
    BrowserModule,
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
    StoreModule.forRoot(reducer)
  ],
  providers: [DataService, AccountService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
