import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/_mocks/mockUser';
import { UserSetting } from '../models/UserSetting';
import { mockSettingUser } from 'src/_mocks/mockSettingUser';
import { getNullableType } from 'graphql';
import { CreateUserInput } from '../utils/CreateUserInput';

export let increId = 3;

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query(() => [User])
  getUsers() {
    return mockUsers;
  }

  @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    // console.log(user);
    return mockSettingUser.find((setting) => setting.userId === user.id);
  }

  @Mutation((returns) => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput) {
    const { username, displayname } = createUserData;
    const newUser = {
      username,
      displayname,
      id: ++increId,
    };
    mockUsers.push(newUser);
    return newUser;
  }
}
