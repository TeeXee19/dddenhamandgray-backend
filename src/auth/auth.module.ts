import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { DbModule } from 'src/db/db.module';


@Module({
  imports: [JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '6000s' },
  }),
  DbModule
],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
