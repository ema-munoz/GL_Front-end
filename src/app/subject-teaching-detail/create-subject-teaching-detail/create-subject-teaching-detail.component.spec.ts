import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubjectTeachingDetailComponent } from './create-subject-teaching-detail.component';

describe('CreateSubjectTeachingDetailComponent', () => {
  let component: CreateSubjectTeachingDetailComponent;
  let fixture: ComponentFixture<CreateSubjectTeachingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubjectTeachingDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSubjectTeachingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
