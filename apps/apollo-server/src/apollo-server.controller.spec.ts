import { Test, TestingModule } from '@nestjs/testing';
import { ApolloServerController } from './apollo-server.controller';
import { ApolloServerService } from './apollo-server.service';

describe('ApolloServerController', () => {
  let apolloServerController: ApolloServerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApolloServerController],
      providers: [ApolloServerService],
    }).compile();

    apolloServerController = app.get<ApolloServerController>(ApolloServerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apolloServerController.getHello()).toBe('Hello World!');
    });
  });
});
