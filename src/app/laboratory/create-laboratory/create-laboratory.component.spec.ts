import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLaboratoryComponent } from './create-laboratory.component';

describe('CreateLaboratoryComponent', () => {
  let component: CreateLaboratoryComponent;
  let fixture: ComponentFixture<CreateLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLaboratoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
