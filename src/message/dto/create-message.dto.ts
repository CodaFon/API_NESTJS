import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateMessageDto {
  @ApiProperty({
    description: 'Enter content message',
    minLength: 5,
    maxLength: 280,
  })
  @IsNotEmpty()
  @Length(5, 280)
  content: string;
}
