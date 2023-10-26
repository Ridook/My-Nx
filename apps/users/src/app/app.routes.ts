import { Route } from '@angular/router';
import { HomeComponent } from 'libs/home/src/lib/home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    loadComponent: () =>
      import(
        'libs/users/feature-users-list/src/lib/users-list-container/users-list-container.component'
      ).then((c) => c.UsersListContainerComponent),
  },
];
