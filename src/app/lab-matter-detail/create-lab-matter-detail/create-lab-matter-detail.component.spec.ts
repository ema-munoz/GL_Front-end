import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLabMatterDetailComponent } from './create-lab-matter-detail.component';

describe('CreateLabMatterDetailComponent', () => {
  let component: CreateLabMatterDetailComponent;
  let fixture: ComponentFixture<CreateLabMatterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLabMatterDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLabMatterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
