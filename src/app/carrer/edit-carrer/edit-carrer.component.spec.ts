import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarrerComponent } from './edit-carrer.component';

describe('EditCarrerComponent', () => {
  let component: EditCarrerComponent;
  let fixture: ComponentFixture<EditCarrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCarrerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCarrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
