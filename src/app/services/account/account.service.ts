import { Injectable } from '@angular/core';
import { PseudoBackendService } from "../pseudo-backend/pseudo-backend.service";
import { Store } from "@ngrx/store";
import { AccountInterface } from "../pseudo-backend/models/account.interface";
import { AppState } from "../../app.state";
import {
  AddAccount,
  LoadAccount,
  DeleteAccount,
  UpdateAccount
} from "../../state/account/account.actions";
import { selectAccountList } from "../../state/account/account.selectors";
import { filter, switchMapTo, take } from "rxjs/operators";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private pseudoService: PseudoBackendService, private store$: Store<AppState>) { }

  public getAllAccounts$(): Observable<AccountInterface[]> {
    const checkStoreAccounts$ = this.store$.select(selectAccountList);

    checkStoreAccounts$.pipe(
      take(1),
      filter((a: AccountInterface[]) => !a.length),
      switchMapTo(this.pseudoService.getAccount$())
    ).subscribe(value => this.store$.dispatch(new LoadAccount(value)));

    return checkStoreAccounts$;
  }

  public AddAccount(account: AccountInterface): void {
    this.store$.dispatch(new AddAccount(account));
  }
  public DeleteAccount(account: AccountInterface): void {
    this.store$.dispatch(new DeleteAccount(account));
  }
  public UpdateAccount(account: AccountInterface): void {
    this.store$.dispatch(new UpdateAccount(account));
  }
}
