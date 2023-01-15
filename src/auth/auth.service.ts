import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Users } from '../user';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const foundUser = Users.filter((user) => {
      return username === user.username;
    })[0];
    if (foundUser) {
      if (await bcrypt.compare(password, foundUser.password)) {
        const { password, ...result } = foundUser;
        return result;
      }

      return null;
    }
    return null;
  }
  login(user: any) {
    const payload = { username: user.username };

    return {
      access_token: this.jwt.sign(payload),
    };
  }
}
