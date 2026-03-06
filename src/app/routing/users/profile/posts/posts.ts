import { Component, input } from '@angular/core';
import { Post } from '../../../../core/types/post';
import { PaginatedPosts } from '../../../../core/services/post-service';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export default class Posts {
  paginatedPosts = input.required<PaginatedPosts>();
}
