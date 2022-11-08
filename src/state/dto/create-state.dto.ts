import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateStateDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
