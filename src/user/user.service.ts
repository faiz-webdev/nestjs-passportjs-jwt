import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'user1',
      password: '12345',
      email: 'user1@mail.com',
      age: 23,
    },
    {
      username: 'user2',
      password: '12345',
      email: 'user2@mail.com',
      age: 24,
    },
    {
      username: 'user3',
      password: '12345',
      email: 'user3@mail.com',
      age: 25,
    },
    {
      username: 'user4',
      password: '12345',
      email: 'user4@mail.com',
      age: 26,
    },
  ];

  getUserByUserName(userName: string): User {
    return this.users.find((user: User) => user.username === userName);
  }
}
