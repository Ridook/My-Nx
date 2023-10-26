import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../model/users.interface';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'org-users-list',
  standalone: true,
  imports: [CommonModule, UsersComponent],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  @Input() users!: IUser[] | undefined;
  @Output() deleteUser = new EventEmitter();

  emitUserId(id: number) {
    this.deleteUser.emit(id);
  }
}
