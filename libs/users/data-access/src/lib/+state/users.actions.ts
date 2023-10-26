import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser } from 'libs/users/feature-users-list/src/lib/model/users.interface';

export const usersActions = createActionGroup({
  source: 'Users',
  events: {
    getUsers: emptyProps(),
    getusersSuccess: props<{ users: IUser[] }>(),
    deleteUser: props<{ id: number }>(),
  },
});
