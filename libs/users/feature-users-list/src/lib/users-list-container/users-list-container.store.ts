import { ComponentStore } from '@ngrx/component-store';
import { IUser } from '../model/users.interface';
import { Injectable, inject } from '@angular/core';
import { UserApiService } from 'libs/users/data-access/src/lib/http/user.api.service';
import { tap } from 'rxjs/operators';

interface UserListState {
  users: IUser[];
}

const initialState: UserListState = {
  users: [],
};

Injectable();
export class UserListContainerStore extends ComponentStore<{ users: IUser[] }> {
  private readonly usersService = inject(UserApiService);
  constructor() {
    super(initialState);
  }

  readonly getUsers = this.effect(() => {
    return this.usersService
      .getUsers()
      .pipe(tap((state) => console.log(state)));
  });
}
