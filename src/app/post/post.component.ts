import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post!: IPost; // sra mijocov asum enq vor inqy petq a stana en inch gtnvum a IPost interface-um

  constructor() {}

  ngOnInit(): void {}
}
