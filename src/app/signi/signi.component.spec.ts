import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigniComponent } from './signi.component';

describe('SigniComponent', () => {
  let component: SigniComponent;
  let fixture: ComponentFixture<SigniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
