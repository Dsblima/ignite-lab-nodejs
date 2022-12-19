import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['striking-mole-12795-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'c3RyaWtpbmctbW9sZS0xMjc5NSQvEfOpMxIHsLCu6rRx62jaRRgcdAv87RN3ue8',
          password: 'uJ7gNAUQXFULmxCEidnFMXrhYcJEdp4hsntuitwa_C3vXBb0tyybczLEMv_0RwKdBXdGPg==',
        },
        ssl: true,
      }
    })
  }
  async onModuleDestroy() {
    await this.close();
  }
}