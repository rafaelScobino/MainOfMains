import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpContainerComponent } from './exp-container.component';

describe('ExpContainerComponent', () => {
  let component: ExpContainerComponent;
  let fixture: ComponentFixture<ExpContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
