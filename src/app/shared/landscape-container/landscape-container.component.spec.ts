import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeContainerComponent } from './landscape-container.component';

describe('LandscapeContainerComponent', () => {
  let component: LandscapeContainerComponent;
  let fixture: ComponentFixture<LandscapeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandscapeContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandscapeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
