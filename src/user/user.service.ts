import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CONSTANTS } from 'src/constants';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'user1',
      password: '12345',
      email: 'user1@mail.com',
      age: 23,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
    },
    {
      username: 'user2',
      password: '12345',
      email: 'user2@mail.com',
      age: 24,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
    },
    {
      username: 'user3',
      password: '12345',
      email: 'user3@mail.com',
      age: 25,
      role: CONSTANTS.ROLES.WEB_DEVELOPER,
    },
    {
      username: 'user4',
      password: '12345',
      email: 'user4@mail.com',
      age: 26,
      role: CONSTANTS.ROLES.WEB_DEVELOPER,
    },
  ];

  getUserByUserName(userName: string): User {
    return this.users.find((user: User) => user.username === userName);
  }
}
