import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsUUID,
  IsDateString,
  Length,
} from 'class-validator';
import { IsEmailNotAlreadyExisting } from '../validator_custom/is-email-not-already-exist.validator';

export class CreateUserDTO {
  @ApiProperty({
    description: 'Enter a nickname',
    minLength: 5,
    maxLength: 50,
  })
  @IsNotEmpty({ message: '' })
  @Length(5, 50)
  pseudo: string;

  @ApiProperty({
    description: 'Enter a email address',
    minLength: 5,
    maxLength: 200,
  })
  @IsEmail()
  @Length(5, 200)
  @IsEmailNotAlreadyExisting()
  mail: string;

  @ApiProperty({
    description: 'Entre your birthDate',
  })
  @IsNotEmpty()
  @IsDateString()
  birthDate: Date;

  @ApiProperty({
    description:
      'Your password must have at least 8 characters and one special character',
    minLength: 8,
  })
  @IsNotEmpty()
  @Length(8)
  password: string;

  @ApiProperty({
    description: 'Entre your role_id',
    default: '2fcc5e80-5f36-11ed-8bbb-7a0ccfe820e5',
  })
  @IsUUID()
  @IsNotEmpty()
  role_id: string;

  @ApiProperty({
    description: 'your account is active',
    default: false,
  })
  @IsNotEmpty()
  active: boolean;
}
