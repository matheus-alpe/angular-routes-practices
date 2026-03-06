import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { userResolver } from '../../core/resolvers/user-resolver';
import { PostService } from '../../core/services/post-service';
import { inject } from '@angular/core';

export const USERS_ROUTES: Routes = [
  {
    path: 'users',
    title: (route) => `User ${route.params['id']}`,
    loadComponent: () => import('./users'),
  },
  {
    path: 'users/:id',
    title: (route) => `User ${route.params['id']}`,
    loadComponent: () => import('./profile/profile'),
    resolve: {
      user: userResolver,
    },
    children: [
      {
        path: 'posts',
        title: 'User Posts',
        loadComponent: () => import('./profile/posts/posts'),
        resolve: {
          paginatedPosts: (route: ActivatedRouteSnapshot) => {
            const postService = inject(PostService);
            const user = route.parent?.data['user'];
            return postService.fetchPostsFromUser(user.id);
          },
        },
      },
    ],
  },
];
