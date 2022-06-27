export class User {
  name: string;
  email: string;

  constructor({name = 'Username', email = 'user@email.com'}) {
    this.name = name;
    this.email = email;
  }
}
