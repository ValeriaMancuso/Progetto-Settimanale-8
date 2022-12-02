import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post!: Post;
  id!: number;

  constructor(private router: ActivatedRoute, private postSrv: PostService) { }

  ngOnInit():void {
    this.router.params.subscribe(params => {
    const id = +params ['id']
    let r = this.postSrv.getPost(id)
    r.then((e) => {
      this.post = e;

    })
    });

  }

}



