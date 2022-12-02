import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [
    {
      id: 1,
      email: 'vale@vale.com',
      nome: 'Valeria',
      role: 'admin'
    },
    {
      id: 2,
      email: 'main@main.com',
      nome: 'Franco',
      role: 'user'
    },
    {
      id: 3,
      email: 'mary@mary.com',
      nome: 'Maria',
      role: 'user'
    },
    {
      id: 4,
      email: 'stato@brado.com',
      nome: 'Massimo',
      role: 'user'
    },
    {
      id: 5,
      email: 'luca@vale.com',
      nome: 'Luca',
      role: 'user'
    },
  ]


  constructor() { }

  getUsers() {
    return this.users
  }

  getUser(id: number) {
    return this.users.find(user => user.id == id)
  }
}
