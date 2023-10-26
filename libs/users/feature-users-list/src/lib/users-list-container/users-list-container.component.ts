import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFacade } from 'libs/users/data-access/src/lib/+state/users.facade';
import { UsersListComponent } from '../users-list/users-list.component';
import { PushPipe } from '@ngrx/component';
@Component({
  selector: 'org-users-list-container',
  standalone: true,
  imports: [CommonModule, UsersListComponent, PushPipe],
  templateUrl: './users-list-container.component.html',
  styleUrls: ['./users-list-container.component.scss'],
  providers: [UsersFacade],
})
export class UsersListContainerComponent implements OnInit {
  private readonly userFacade = inject(UsersFacade);

  public users$ = this.userFacade.users$;

  ngOnInit(): void {
    this.userFacade.loadUsers();
  }
  deleteUser(id: number) {
    console.log(id, 'deleteuser родитель');
    this.userFacade.deleteUser(id)
  }
}
