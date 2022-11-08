import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateAttachementDto } from './create-attachement.dto';

export class UpdateAttachementDto extends PartialType(CreateAttachementDto) {
  @ApiProperty()
  @IsNotEmpty()
  content: string;

  @ApiProperty()
  @IsNotEmpty()
  updated_at: Date;
}
