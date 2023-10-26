import { Injectable, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { usersSelector } from '@org/data-access';
import { usersActions } from './users.actions';

Injectable({
  providedIn: 'root',
});
export class UsersFacade {
  private readonly store = inject(Store);
  public users$ = this.store.pipe(select(usersSelector.users));

  public loadUsers() {
    this.store.dispatch(usersActions.getUsers());
  }

  public deleteUser(id: number) {
    this.store.dispatch(usersActions.deleteUser({ id}));
  }
}
