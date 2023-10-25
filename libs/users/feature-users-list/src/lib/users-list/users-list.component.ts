import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {}
