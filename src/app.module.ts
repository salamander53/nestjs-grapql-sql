import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { UserResolver } from './users/UserResolver';
import { UserSettingResolve } from './Graphql/resolvers/UserSettingResolve';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Graphql/models/User';
import { UserSetting } from './Graphql/models/UserSetting';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Anhbon*1234',
      database: 'nestjs_graphql_tutorial',
      entities: [User, UserSetting],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [UserSettingResolve],
})
export class AppModule {}
