import { Test, TestingModule } from '@nestjs/testing';
import { KafkaAppController } from './kafka-app.controller';
import { KafkaAppService } from './kafka-app.service';

describe('KafkaAppController', () => {
  let kafkaAppController: KafkaAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [KafkaAppController],
      providers: [KafkaAppService],
    }).compile();

    kafkaAppController = app.get<KafkaAppController>(KafkaAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(kafkaAppController.getHello()).toBe('Hello World!');
    });
  });
});
