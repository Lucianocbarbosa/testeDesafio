import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CreatePostComponent } from './components/post/create-post/create-post.component';
import { DetailsPostComponent } from './components/post/details-post/details-post.component';
import { ReadPostComponent } from './components/post/read-post/read-post.component';
import { SearchAreaComponent } from './components/search-area/search-area.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAreaComponent,
    SidebarComponent,
    ReadPostComponent,
    CreatePostComponent,
    DetailsPostComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
