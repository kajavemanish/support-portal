import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TYPEORM_CONNECTION } from './constants/typeorm.connection';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { SystemSettingsModule } from './system-settings/system-settings.module';
import { IssueModule } from './issue/issue.module';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot(TYPEORM_CONNECTION),
    ConfigModule,
    AuthModule,
    SystemSettingsModule,
    IssueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
