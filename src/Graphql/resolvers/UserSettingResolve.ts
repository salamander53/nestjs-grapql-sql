import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingInput } from '../utils/CreateUserSettingInput';
import { mockSettingUser } from 'src/_mocks/mockSettingUser';

@Resolver()
export class UserSettingResolve {
  @Mutation((returns) => UserSetting)
  createUserSetting(
    @Args('CreateUserSettingData')
    createUserSettingData: CreateUserSettingInput,
  ) {
    console.log(createUserSettingData);
    mockSettingUser.push(createUserSettingData);
    return createUserSettingData;
  }
}
