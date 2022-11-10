import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';
import { CreateMessageDto } from './create-message.dto';

export class UpdateMessageDto extends PartialType(CreateMessageDto) {
  @ApiProperty({
    description: 'Enter content message',
    minLength: 5,
    maxLength: 280,
  })
  @IsNotEmpty()
  @Length(5, 280)
  content: string;

  @ApiProperty()
  @IsNotEmpty()
  updated_at: Date;
}
