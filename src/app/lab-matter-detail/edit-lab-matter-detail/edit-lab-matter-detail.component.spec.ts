import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLabMatterDetailComponent } from './edit-lab-matter-detail.component';

describe('EditLabMatterDetailComponent', () => {
  let component: EditLabMatterDetailComponent;
  let fixture: ComponentFixture<EditLabMatterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLabMatterDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLabMatterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
