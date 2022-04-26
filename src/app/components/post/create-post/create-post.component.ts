import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  title!: string
  body!: string

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  create() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: this.title,
        body: this.body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        alert(
          `
Criação da notícia com sucesso

• Título
\t ${json.title}

• Descrição
\t ${json.body}
`
        )
        console.log(json)
      })
      .then(() => {
        this.router.navigate(['/'])
      });
  }

  cancel() {
    this.router.navigate(['/'])
  }

}
