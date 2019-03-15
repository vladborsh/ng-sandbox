<<<<<<< HEAD
import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { CustomerInterface } from "../../../services/pseudo-backend/models/customer.interface";
import { CustomerService } from "../../../services/customer/customer.service";
import {interval} from "rxjs/internal/observable/interval";
import {take} from "rxjs/operators";
=======
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { CustomerInterface } from "../../../services/pseudo-backend/models/customer.interface";
import { CustomerService } from "../../../services/customer/customer.service";
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90

@Component({
  selector: 'app-smart-customer',
  templateUrl: './smart-customer.component.html',
<<<<<<< HEAD
  styleUrls: ['./smart-customer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartCustomerComponent implements OnInit, AfterViewInit {
  public smartCustomers$: Observable<CustomerInterface[]>;
  public customerInterval$: Observable<number> = interval(1000);
  public customerCount: number = null;
  constructor(private customerService: CustomerService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.smartCustomers$ = this.customerService.getAllCustomer$();
    this.customerInterval$.pipe(take(20)).subscribe(value => {
      this.customerCount = value;
      this.cd.detectChanges();
    });
  }
  ngAfterViewInit() {
    this.cd.detach();
  }
=======
  styleUrls: ['./smart-customer.component.scss']
})
export class SmartCustomerComponent implements OnInit {
  public smartCustomers$: Observable<CustomerInterface[]>;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.smartCustomers$ = this.customerService.getAllCustomer$();
  }

>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
}
