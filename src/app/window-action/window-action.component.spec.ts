import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowActionComponent } from './window-action.component';

describe('WindowActionComponent', () => {
  let component: WindowActionComponent;
  let fixture: ComponentFixture<WindowActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
