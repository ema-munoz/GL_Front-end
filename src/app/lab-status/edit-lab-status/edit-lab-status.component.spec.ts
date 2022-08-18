import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLabStatusComponent } from './edit-lab-status.component';

describe('EditLabStatusComponent', () => {
  let component: EditLabStatusComponent;
  let fixture: ComponentFixture<EditLabStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLabStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLabStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
