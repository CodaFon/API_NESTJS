export class CreateUserDTO {
  id: string;
  pseudo: string;
  mail: string;
  birthDate: Date;
  password: string;
  active: boolean;
  role_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
