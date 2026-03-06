import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { BASE_API_URL } from './constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  async fetchUser(userId: string): Promise<User> {
    try {
      const response = await fetch(`${BASE_API_URL}/users/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }
}
