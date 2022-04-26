import { Post } from './../post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css']
})
export class ReadPostComponent implements OnInit {

  posts!: Post[]

  constructor() { }

  ngOnInit(): void {
    this.read();
  }

  read() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => this.posts = json);
  }
}
