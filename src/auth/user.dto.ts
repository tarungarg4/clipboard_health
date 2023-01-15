import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  username: String;
  @ApiProperty()
  password: String;
}
