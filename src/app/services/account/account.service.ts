import { Injectable } from '@angular/core';
import { PseudoBackendService } from "../pseudo-backend/pseudo-backend.service";
import { select, Store } from "@ngrx/store";
import { AccountInterface } from "../pseudo-backend/models/account.interface";
import { AppState } from "../../app.state";
import { AddAccount, LoadAccount, DeleteAccount, UpdateAccount } from "../../state/account/account.actions";
import { selectAccountList } from "../../state/account/account.selectors";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private pseudoService: PseudoBackendService, private store$: Store<AppState>) { }

  public getAllAccounts$() {
    this.pseudoService.getAccount$().subscribe(value => {
        this.store$.dispatch(new LoadAccount(value));
      }
    );

    return this.store$.pipe(select(selectAccountList));
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
