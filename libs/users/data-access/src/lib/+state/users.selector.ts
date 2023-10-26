import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUser } from 'libs/users/feature-users-list/src/lib/model/users.interface';

export const usersFeatureSelector = createFeatureSelector<{ users: IUser[] }>(
  'users'
);

export const users = createSelector(
  usersFeatureSelector,
  ({users}: { users: IUser[] }) => users
);
