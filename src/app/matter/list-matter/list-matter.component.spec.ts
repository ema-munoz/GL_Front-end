import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatterComponent } from './list-matter.component';

describe('ListMatterComponent', () => {
  let component: ListMatterComponent;
  let fixture: ComponentFixture<ListMatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMatterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
