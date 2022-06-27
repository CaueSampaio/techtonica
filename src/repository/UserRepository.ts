import { User } from 'models/User';
import {storage} from './storage';

export class UserRepository {
  setUser(user: User) {
    storage.set('user', JSON.stringify(user));
  }

  getUser(): User {
    const jsonUser = storage.getString('user') ?? '';
    const plainUser = JSON.parse(jsonUser);
    const user = new User(plainUser);
    return user;
  }
}
