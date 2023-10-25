import { Route } from '@angular/router';
import {HomeComponent} from 'libs/home/src/lib/home/home.component'

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent
    }
];
