import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeTextComponent } from './add-type-text.component';

describe('AddTypeTextComponent', () => {
  let component: AddTypeTextComponent;
  let fixture: ComponentFixture<AddTypeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
