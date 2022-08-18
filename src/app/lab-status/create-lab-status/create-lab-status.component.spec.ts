import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLabStatusComponent } from './create-lab-status.component';

describe('CreateLabStatusComponent', () => {
  let component: CreateLabStatusComponent;
  let fixture: ComponentFixture<CreateLabStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLabStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLabStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
