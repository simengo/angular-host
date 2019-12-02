import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningContentsComponent } from './learning-contents.component';

describe('LearningContentsComponent', () => {
  let component: LearningContentsComponent;
  let fixture: ComponentFixture<LearningContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
