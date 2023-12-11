import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.age = createUserDto.age;
    user.email = createUserDto.email;

    return this.userRepository.save(user);
  }

  findUserByAge(age: number) {
    return this.userRepository.getUserByAge(age);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.age = updateUserDto.age;
    user.id = id;

    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete({ id });
  }

  // public users: User[] = [
  //   {
  //     username: 'user1',
  //     password: '12345',
  //     email: 'user1@mail.com',
  //     age: 23,
  //     role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
  //   },
  //   {
  //     username: 'user2',
  //     password: '12345',
  //     email: 'user2@mail.com',
  //     age: 24,
  //     role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
  //   },
  //   {
  //     username: 'user3',
  //     password: '12345',
  //     email: 'user3@mail.com',
  //     age: 25,
  //     role: CONSTANTS.ROLES.WEB_DEVELOPER,
  //   },
  //   {
  //     username: 'user4',
  //     password: '12345',
  //     email: 'user4@mail.com',
  //     age: 26,
  //     role: CONSTANTS.ROLES.WEB_DEVELOPER,
  //   },
  // ];

  getUserByUserName(userName: string): any {
    // return this.users.find((user: User) => user.username === userName);
  }
}
