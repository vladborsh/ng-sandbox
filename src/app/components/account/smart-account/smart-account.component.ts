import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { interval } from "rxjs/internal/observable/interval";
import { take } from "rxjs/operators";
import { Observable } from "rxjs/internal/Observable";
import { AccountInterface } from "../../../services/pseudo-backend/models/account.interface";
import { AccountService } from "../../../services/account/account.service";

@Component({
  selector: 'app-smart-account',
  templateUrl: './smart-account.component.html',
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
}

