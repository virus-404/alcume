import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls:['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
  // posts = [
  //   {title: 'Salut i esperança', content: 'La salut és el benestar que un mateix vol'},
  //   {title: 'Salut i esperança', content: 'La salut és el benestar que un mateix vol'},
  //   {title: 'Salut i esperança', content: 'La salut és el benestar que un mateix vol'},
  //   {title: 'Salut i esperança', content: 'La salut és el benestar que un mateix vol'},
  // ]

  posts: Post[] = [];
  private postSub: Subscription;
  constructor(public postService: PostService) {}

  ngOnInit(){
    this.posts = this.postService.getPost();
    this.postSub = this.postService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
         this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();

  }
}
