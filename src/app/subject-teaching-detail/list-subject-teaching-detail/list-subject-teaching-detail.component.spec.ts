import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubjectTeachingDetailComponent } from './list-subject-teaching-detail.component';

describe('ListSubjectTeachingDetailComponent', () => {
  let component: ListSubjectTeachingDetailComponent;
  let fixture: ComponentFixture<ListSubjectTeachingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubjectTeachingDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSubjectTeachingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
