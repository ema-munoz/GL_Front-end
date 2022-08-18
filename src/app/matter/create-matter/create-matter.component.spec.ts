import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMatterComponent } from './create-matter.component';

describe('CreateMatterComponent', () => {
  let component: CreateMatterComponent;
  let fixture: ComponentFixture<CreateMatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMatterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
