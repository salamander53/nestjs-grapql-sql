import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { UserResolver } from './Graphql/resolvers/UserResolver';
import { UserSettingResolve } from './Graphql/resolvers/UserSettingResolve';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
  ],
  controllers: [],
  providers: [UserResolver, UserSettingResolve],
})
export class AppModule {}
