import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowtextComponent } from './flowtext.component';

describe('FlowtextComponent', () => {
  let component: FlowtextComponent;
  let fixture: ComponentFixture<FlowtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowtextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
