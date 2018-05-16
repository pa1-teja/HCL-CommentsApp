import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCommentReplyComponent } from './specific-comment-reply.component';

describe('SpecificCommentReplyComponent', () => {
  let component: SpecificCommentReplyComponent;
  let fixture: ComponentFixture<SpecificCommentReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificCommentReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificCommentReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
