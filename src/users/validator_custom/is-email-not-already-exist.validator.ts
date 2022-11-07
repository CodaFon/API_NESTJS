import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { User } from '../entities/user.entity';

/**
 * @name IsEmailNotAlreadyExisting
 * @decorate
 * @description The specified email address already exist.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */

@ValidatorConstraint({ async: true })
export class IsEmailNotAlreadyExist implements ValidatorConstraintInterface {
  validate(mail: string) {
    return User.findOne({ where: { mail } }).then((user) => {
      if (user) return false;
      return true;
    });
  }
}

export function IsEmailNotAlreadyExisting(
  validationOptions?: ValidationOptions,
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      validator: IsEmailNotAlreadyExist,
      options: {
        message: 'The specified email address already exist',
        ...validationOptions,
      },
    });
  };
}
