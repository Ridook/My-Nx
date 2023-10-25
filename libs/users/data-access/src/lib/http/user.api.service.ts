import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'libs/users/feature-users-list/src/lib/model/users.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserApiService {
  private readonly http = inject(HttpClient);

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
