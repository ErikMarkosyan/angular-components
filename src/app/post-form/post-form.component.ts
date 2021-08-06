import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<IPost> = new EventEmitter()
  title = ''
  text = ''
  constructor() { }

  ngOnInit(): void {
  }

  addPost(){
    const post: IPost = {
        title: this.title,
        text: this.text,

     
    }
    this.onAdd.emit(post)
    console.log('New Post ', post)
    this.title = this.text = ''
  }
}
