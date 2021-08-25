import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-engine',
  templateUrl: './game-engine.component.html',
  styleUrls: ['./game-engine.component.scss']
})
export class GameEngineComponent implements OnInit {

  player1: Player;
  player2: Player;

  _winner: Player;

  storedPlayers: Player[];

  createPlayer1FormSubmited: boolean = false;
  createPlayer2FormSubmited: boolean = false;
  selectionFormSubmitted: boolean = false;
  createNewPlayers: boolean = false;
  playWithExistingPlayers: boolean = false;
  existingPlayer1SelectionFormSubmitted: boolean = false;
  existingPlayer2SelectionFormSubmitted: boolean = false;
  updatedData: boolean = false;

  existingPlayer1: Player;
  existingPlayer2: Player;

  constructor(private gameService: GameService) { }

  newPlayers() {
    this.selectionFormSubmitted = true;
    this.createNewPlayers = true;
  }

  existingPlayers() {
    this.selectionFormSubmitted = true;
    this.playWithExistingPlayers = true;
  }

  addExistingPlayer1ToGame() {
    this.player1 = Object.assign(this.player1, this.existingPlayer1);
    this.existingPlayer1SelectionFormSubmitted = true;
  }

  addExistingPlayer2ToGame() {
    this.player2 = Object.assign(this.player2, this.existingPlayer2);
    this.existingPlayer2SelectionFormSubmitted = true;
  }

  createPlayer1() {
    this.createPlayer1FormSubmited = true;

    this.gameService.createPlayer(this.player1).subscribe(data => {
      console.log('Successfully created player: ');
      console.log(data);
      this.player1 = Object.assign(this.player1, data);
    }, err => {
      console.log('Something went wrong. Unable to create player :(' + err);
    });

  }

  createPlayer2() {
    this.createPlayer2FormSubmited = true;

    this.gameService.createPlayer(this.player2).subscribe(data => {
      console.log('Successfully created player: ');
      console.log(data);
      this.player2 = Object.assign(this.player2, data);
    }, err => {
      console.log('Something went wrong. Unable to create player :(' + err);
    });

  }

  ngOnInit(): void {
    this.player1 = new Player();
    this.player2 = new Player();
    this.existingPlayer1 = new Player();
    this.existingPlayer2 = new Player();
    this._winner = new Player;
    this.storedPlayers = [];
    this.selectionFormSubmitted = false;
    this.createPlayer1FormSubmited =  false;
    this.createPlayer2FormSubmited =  false;
    this.existingPlayer1SelectionFormSubmitted = false;
    this.existingPlayer2SelectionFormSubmitted = false;

    this.updatedData = false;
    this.gameService.getPlayers().subscribe(data => {
      this.storedPlayers = Object.assign(this.storedPlayers, data);
    }, err => {
      console.log("Problem with getting players from the database: " + err)
    })
  }

  gameOver(winner: Player) {
    if (!this.updatedData) {
      if (winner.playerName == this.player1.playerName) {
        this.player1.wins += 1;
        this.player1.points += 3;
        this.player1.matchesPlayed += 1;
        this.gameService.updatePlayer(this.player1.playerId, this.player1).subscribe(data => {
          console.log('Successfully updated winner data');
          this.updatedData = true;
        }, err => {
          console.log('Something went wrong. Unable to update winner data ->' + err);
        });
      } else if (winner.playerName == this.player2.playerName) {
        this.player2.wins += 1;
        this.player2.points += 3;
        this.player2.matchesPlayed += 1;
        this.gameService.updatePlayer(this.player2.playerId, this.player2).subscribe(data => {
          console.log('Successfully updated winner data');
          this.updatedData = true;
        }, err => {
          console.log('Something went wrong. Unable to update winner data ->' + err);
        });
      }
    }
  }

}
