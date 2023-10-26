import { createFeature, createReducer, on } from '@ngrx/store';
import { IUser } from 'libs/users/feature-users-list/src/lib/model/users.interface';
import { usersActions } from './users.actions';

export interface UsersInitialState {
  users: IUser[];
}

export const usersInitialState: UsersInitialState = {
  users: [],
};

export const usersFeature = createFeature({
  name: 'users',
  reducer: createReducer(
    usersInitialState,
    on(usersActions.getusersSuccess, (state, { users }) => {
      return {
        ...state,
        users,
      };
    }),
    on(usersActions.deleteUser, (state, id) => {
      console.log(state, 'state');
      console.log(id, 'id');
      return {
        ...state,
        users: state.users.filter((user) => user.id !== id.id),
      };
    })
  ),
});
