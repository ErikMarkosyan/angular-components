import { Component } from '@angular/core';

export interface IPost {
  title: string;
  text: string;
  id?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: IPost[] = [
    // {title: 'I want to learn Angular', text: 'I still learn components', id: 1},
    // {title: 'The second block', text:'It will be about directives and pipes', id: 2}
  ];

  updatePosts(post: IPost) {
    this.posts.push(post);
    console.log('post ', post);
  }
}
