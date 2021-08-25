import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclareWinnerComponent } from './declare-winner.component';

describe('DeclareWinnerComponent', () => {
  let component: DeclareWinnerComponent;
  let fixture: ComponentFixture<DeclareWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclareWinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclareWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
