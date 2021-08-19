import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulargridComponent } from './angulargrid.component';

describe('AngulargridComponent', () => {
  let component: AngulargridComponent;
  let fixture: ComponentFixture<AngulargridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngulargridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulargridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
