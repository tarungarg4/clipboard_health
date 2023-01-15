import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { RecordsModule } from './records/records.module';

@Module({
  imports: [
    JwtModule.register({
      secret: '123',
      signOptions: { expiresIn: '60m' },
    }),
    RecordsModule,
    AuthModule,
  ],
  providers: [AuthService],
})
export class AppModule {}
