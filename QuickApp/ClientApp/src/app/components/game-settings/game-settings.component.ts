import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GameSettings } from '../../models/game-settings.model';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss']
})

export class GameSettingsComponent implements OnInit {
  durations = [5, 10, 15, 20, 30];
  colours = ['white', 'black', 'random'];

  model = new GameSettings();
  submitted = false;

  ngOnInit() {}

  onSubmit(): void {
    console.warn('Your preferred game settings are submited');
    this.submitted = true;
  }
}

