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
import { CardComponent } from './components/card/card.component';
import { FormControlErrorsComponent } from './components/form-control-errors/form-control-errors.component';
import { SliderComponent } from './components/slider/slider.component';
import { CarouselItemDirective } from './directives/carousel-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    SmartAccountComponent,
    DumbAccountComponent,
    SmartCustomerComponent,
    DumbCustomerComponent,
    CardComponent,
    FormControlErrorsComponent,
    SliderComponent,
    CarouselItemDirective
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
