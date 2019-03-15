<<<<<<< HEAD
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit} from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { AccountInterface } from "../../../services/pseudo-backend/models/account.interface";
import { AccountService } from "../../../services/account/account.service";
import {interval} from "rxjs/internal/observable/interval";
import {take} from "rxjs/operators";
=======
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { AccountInterface } from "../../../services/pseudo-backend/models/account.interface";
import { AccountService } from "../../../services/account/account.service";
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90

@Component({
  selector: 'app-smart-account',
  templateUrl: './smart-account.component.html',
<<<<<<< HEAD
  styleUrls: ['./smart-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartAccountComponent implements OnInit {
  public accountInterval: Observable<number> = interval(1000);
  public accountCount: number = null;
  public smartAccounts$: Observable<AccountInterface[]>;
  constructor(private accountService: AccountService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.smartAccounts$ = this.accountService.getAllAccounts$();
    this.accountInterval.pipe(take(20)).subscribe(value => {
      this.accountCount = value;
      this.cd.markForCheck();
    });
  }
=======
  styleUrls: ['./smart-account.component.scss']
})
export class SmartAccountComponent implements OnInit {
  public smartAccounts$: Observable<AccountInterface[]>;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.smartAccounts$ = this.accountService.getAllAccounts$();
  }

>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
}
