import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnPromotionComponent } from './pawn-promotion.component';

describe('PawnPromotionComponent', () => {
  let component: PawnPromotionComponent;
  let fixture: ComponentFixture<PawnPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PawnPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PawnPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
