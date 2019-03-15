<<<<<<< HEAD
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
=======
import { Component, Input, OnInit } from '@angular/core';
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
import { CustomerInterface } from "../../../services/pseudo-backend/models/customer.interface";

@Component({
  selector: 'app-dumb-customer',
  templateUrl: './dumb-customer.component.html',
<<<<<<< HEAD
  styleUrls: ['./dumb-customer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
=======
  styleUrls: ['./dumb-customer.component.scss']
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
})
export class DumbCustomerComponent implements OnInit {
  @Input() dumbCustomer: CustomerInterface;
  constructor() { }

  ngOnInit() {}

}
