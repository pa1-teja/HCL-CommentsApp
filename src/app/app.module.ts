import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpecificCommentReplyComponent } from './specific-comment-reply/specific-comment-reply.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecificCommentReplyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SpecificCommentReplyComponent]
})
export class AppModule { }
