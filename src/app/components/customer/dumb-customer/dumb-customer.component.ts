import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CustomerInterface } from "../../../services/pseudo-backend/models/customer.interface";

@Component({
  selector: 'app-dumb-customer',
  templateUrl: './dumb-customer.component.html',
  styleUrls: ['./dumb-customer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DumbCustomerComponent implements OnInit {
  @Input() dumbCustomer: CustomerInterface;
  constructor() { }

  ngOnInit() {}

}
