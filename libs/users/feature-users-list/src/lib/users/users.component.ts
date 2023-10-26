import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../model/users.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'org-users',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  @Input() user!: IUser;
  @Output() removeUser = new EventEmitter();

  public get avatarSrc() {
    return '/assets/img/photo_2023-10-26_13-36-44.jpg';
  }

  public deleteUser(id: number) {
    this.removeUser.emit(id);
  }
}
