import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css']
})
export class DetailsPostComponent implements OnInit {

  title!: string;
  body!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.readById(id!);
  }

  readById(id: string) {
    if ((+id < 0) || (+id > 100)) {
      alert("id informado não existe");
      this.back();
    } else {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) => {
          this.title = json.title
          this.body = json.body
        });
    };
  };

  back() {
    this.router.navigate(['/']);
  }

}
