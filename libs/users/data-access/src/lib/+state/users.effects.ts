import { createEffect, Actions, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { UserApiService } from '../http/user.api.service';
import { usersActions } from './users.actions';
import { map, switchMap, tap } from 'rxjs';

export const getUser = createEffect(
  () => {
    const api = inject(UserApiService);
    const actions$ = inject(Actions);

    return actions$.pipe(
      ofType(usersActions.getUsers),
      switchMap(() => api.getUsers()),
      map((users) => usersActions.getusersSuccess({ users }))
    );
  },
  { functional: true }
);
