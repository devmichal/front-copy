import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalPreloadersComponent } from './normal-preloaders.component';

describe('NormalPreloadersComponent', () => {
  let component: NormalPreloadersComponent;
  let fixture: ComponentFixture<NormalPreloadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalPreloadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalPreloadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
