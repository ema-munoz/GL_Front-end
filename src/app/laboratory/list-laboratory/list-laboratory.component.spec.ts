import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLaboratoryComponent } from './list-laboratory.component';

describe('ListLaboratoryComponent', () => {
  let component: ListLaboratoryComponent;
  let fixture: ComponentFixture<ListLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLaboratoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
