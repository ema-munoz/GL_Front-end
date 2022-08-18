import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLabMatterDetailComponent } from './list-lab-matter-detail.component';

describe('ListLabMatterDetailComponent', () => {
  let component: ListLabMatterDetailComponent;
  let fixture: ComponentFixture<ListLabMatterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLabMatterDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLabMatterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
