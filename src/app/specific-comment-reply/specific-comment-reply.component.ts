import { Component, OnInit,
 ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentRef,
    ComponentFactory } from '@angular/core';


@Component({
  selector: 'app-specific-comment-reply',
  templateUrl: './specific-comment-reply.component.html',
  styleUrls: ['./specific-comment-reply.component.css']
})
export class SpecificCommentReplyComponent implements OnInit {

  constructor() { }

@ViewChild("replyPost",
	 {read: ViewContainerRef}) container: ViewContainerRef; 
  componentRef: any;

  ngOnInit() {
  }

}
