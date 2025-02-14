import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticicationComponent } from './noticication.component';

describe('NoticicationComponent', () => {
  let component: NoticicationComponent;
  let fixture: ComponentFixture<NoticicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
