import { Injectable } from '@angular/core';
import { Post } from '../types/post';
import { BASE_API_URL } from './constants';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  async fetchPostsFromUser(userId: string): Promise<PaginatedPosts> {
    try {
      const response = await fetch(`${BASE_API_URL}/posts/user/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch posts data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching posts data:', error);
      throw error;
    }
  }
}

export interface PaginatedPosts {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}
