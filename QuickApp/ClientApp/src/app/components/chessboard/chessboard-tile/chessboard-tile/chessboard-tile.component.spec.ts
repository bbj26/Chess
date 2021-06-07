import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessboardTileComponent } from './chessboard-tile.component';

describe('ChessboardTileComponent', () => {
  let component: ChessboardTileComponent;
  let fixture: ComponentFixture<ChessboardTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessboardTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessboardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
