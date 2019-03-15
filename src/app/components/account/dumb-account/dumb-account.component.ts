<<<<<<< HEAD
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AccountInterface } from "../../../services/pseudo-backend/models/account.interface";
=======
import {Component, Input, OnInit} from '@angular/core';
import {AccountInterface} from "../../../services/pseudo-backend/models/account.interface";
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90

@Component({
  selector: 'app-dumb-account',
  templateUrl: './dumb-account.component.html',
<<<<<<< HEAD
  styleUrls: ['./dumb-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
=======
  styleUrls: ['./dumb-account.component.scss']
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
})
export class DumbAccountComponent implements OnInit {
  @Input() dumbAccout: AccountInterface;
  constructor() { }

  ngOnInit() {
  }

}
