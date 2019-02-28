import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { CustomerInterface } from "../../../services/pseudo-backend/models/customer.interface";
import { CustomerService } from "../../../services/customer/customer.service";

@Component({
  selector: 'app-smart-customer',
  templateUrl: './smart-customer.component.html',
  styleUrls: ['./smart-customer.component.scss']
})
export class SmartCustomerComponent implements OnInit {
  public smartCustomers$: Observable<CustomerInterface[]>;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.smartCustomers$ = this.customerService.getAllCustomer$();
  }

}
