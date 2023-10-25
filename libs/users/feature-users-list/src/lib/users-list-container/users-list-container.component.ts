import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-users-list-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list-container.component.html',
  styleUrls: ['./users-list-container.component.scss'],
})
export class UsersListContainerComponent {}
