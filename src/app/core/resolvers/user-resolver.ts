import { ResolveFn } from '@angular/router';
import { User } from '../types/user';
import { inject } from '@angular/core';
import { UserService } from '../services/user-service';

export const userResolver: ResolveFn<User> = (route, state) => {
  const userService = inject(UserService);
  const userId = route.paramMap.get('id');
  return userService.fetchUser(userId!);
};
