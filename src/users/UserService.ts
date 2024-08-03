import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Graphql/models/User';
import { CreateUserInput } from 'src/Graphql/utils/CreateUserInput';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  getUserById(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  createUser(createUserData: CreateUserInput) {
    const newUser = this.userRepository.create(createUserData);
    return this.userRepository.save(newUser);
  }
}
