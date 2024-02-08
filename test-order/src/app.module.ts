import { Module } from '@nestjs/common';
import { DbconfigModule } from './dbconfig/dbconfig.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ShoppingModule } from './modules/shopping/shopping.module';
import { LogisticsModule } from './modules/logistics/logistics.module';
import { OrderModule } from './modules/order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { Configuration } from './config/config.keys';
import { ConfigService } from './config/config.service';
import { WebhookModule } from './modules/webhook/webhook.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'test_order',
      retryAttempts: 10,
      retryDelay: 3000,
      entities: [__dirname + '/**/*.entity.ts'],
      autoLoadEntities: true,
      synchronize: false,
    }),
    //DbconfigModule,
    ProfileModule,
    ShoppingModule,
    LogisticsModule,
    OrderModule,
    ConfigModule,
    WebhookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
