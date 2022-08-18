import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeachersComponent } from './create-teachers.component';

describe('CreateTeachersComponent', () => {
  let component: CreateTeachersComponent;
  let fixture: ComponentFixture<CreateTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTeachersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
