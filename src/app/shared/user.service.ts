import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users = new BehaviorSubject<string[]>([]);
  constructor() { }

  public addUser(username:string) {
    this.users.subscribe((x)=>{
       x.push(username);
      })
  }
}
