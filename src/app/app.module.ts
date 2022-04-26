import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchAreaComponent } from './components/search-area/search-area.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReadPostComponent } from './components/post/read-post/read-post.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAreaComponent,
    SidebarComponent,
    ReadPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
