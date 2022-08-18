import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubjectTeachingDetailComponent } from './edit-subject-teaching-detail.component';

describe('EditSubjectTeachingDetailComponent', () => {
  let component: EditSubjectTeachingDetailComponent;
  let fixture: ComponentFixture<EditSubjectTeachingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubjectTeachingDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSubjectTeachingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
