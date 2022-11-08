import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class AddFriendsDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  user_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  user_id_friend: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  state_id: string;
}
