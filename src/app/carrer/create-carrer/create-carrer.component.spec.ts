import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarrerComponent } from './create-carrer.component';

describe('CreateCarrerComponent', () => {
  let component: CreateCarrerComponent;
  let fixture: ComponentFixture<CreateCarrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCarrerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCarrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
