import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLabStatusComponent } from './list-lab-status.component';

describe('ListLabStatusComponent', () => {
  let component: ListLabStatusComponent;
  let fixture: ComponentFixture<ListLabStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLabStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLabStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
