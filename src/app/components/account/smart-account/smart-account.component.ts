import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { AccountInterface } from "../../../services/pseudo-backend/models/account.interface";
import { AccountService } from "../../../services/account/account.service";

@Component({
  selector: 'app-smart-account',
  templateUrl: './smart-account.component.html',
  styleUrls: ['./smart-account.component.scss']
})
export class SmartAccountComponent implements OnInit {
  public smartAccounts$: Observable<AccountInterface[]>;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.smartAccounts$ = this.accountService.getAllAccounts$();
  }

}
