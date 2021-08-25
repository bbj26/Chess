import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayVersusAIComponent } from './play-versus-ai.component';

describe('PlayVersusAIComponent', () => {
  let component: PlayVersusAIComponent;
  let fixture: ComponentFixture<PlayVersusAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayVersusAIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayVersusAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
