export class User {
  email: string;
  password: string;
  roles: string[];
  isEnabled?: boolean = true;
}
