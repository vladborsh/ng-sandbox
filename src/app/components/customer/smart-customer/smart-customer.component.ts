import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { CustomerInterface } from "../../../services/pseudo-backend/models/customer.interface";
import { CustomerService } from "../../../services/customer/customer.service";
import { interval } from "rxjs/internal/observable/interval";
import { take } from "rxjs/operators";

@Component({
  selector: 'app-smart-customer',
  templateUrl: './smart-customer.component.html',
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
}
