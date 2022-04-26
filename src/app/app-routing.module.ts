import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePostComponent } from './components/post/create-post/create-post.component';
import { ReadPostComponent } from './components/post/read-post/read-post.component';

const routes: Routes = [
  { path: 'read', component: ReadPostComponent },
  { path: 'create', component: CreatePostComponent },
  { path: '**', redirectTo: 'read', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
