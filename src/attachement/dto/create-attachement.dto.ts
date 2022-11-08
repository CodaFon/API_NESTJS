import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateAttachementDto {
  @ApiProperty()
  @IsNotEmpty()
  content: string;
}
