import {
  IsEmail,
  IsNotEmpty,
  IsUUID,
  IsDateString,
  Length,
} from 'class-validator';
import { IsEmailNotAlreadyExisting } from '../validator_custom/is-email-not-already-exist.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: '' })
  @Length(5, 50)
  pseudo: string;

  @IsEmail()
  @Length(5, 200)
  @IsEmailNotAlreadyExisting()
  mail: string;

  @IsNotEmpty()
  @IsDateString()
  birthDate: Date;

  @IsNotEmpty()
  password: string;

  @IsUUID()
  @IsNotEmpty()
  role_id: string;

  @IsNotEmpty()
  active: boolean;
}
