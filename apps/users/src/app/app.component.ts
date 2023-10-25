import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from 'libs/header/src/lib/header.component'

@Component({
  standalone: true,
  imports: [ RouterModule, HeaderComponent],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'users';
}
