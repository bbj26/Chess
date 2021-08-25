import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-play-versus-ai',
  templateUrl: './play-versus-ai.component.html',
  styleUrls: ['./play-versus-ai.component.scss']
})
export class PlayVersusAIComponent implements OnInit {

  player: Player;
  chessBot: Player;
  _winner: Player;
  storedPlayers: Player[];

  selectionFormSubmitted: boolean;
  createNewPlayer: boolean;
  playWithExistingPlayer: boolean;
  createPlayerFormSubmited: boolean;
  existingPlayerSelectionFormSubmitted: boolean;
  playerColour: string;
  startGamePlayerWhite: boolean;
  startGamePlayerBlack: boolean;
  chessBotTeam: string = '';
  updatedData: boolean = false;
  
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.player = new Player();
    this.chessBot = new Player();
    this._winner = new Player();
    this.storedPlayers = [];
    this.selectionFormSubmitted = false;
    this.createNewPlayer = false;
    this.playWithExistingPlayer = false;
    this.createPlayerFormSubmited = false;
    this.existingPlayerSelectionFormSubmitted = false;
    this.playerColour = '';
    this.startGamePlayerWhite = false;
    this.startGamePlayerBlack = false;
    this.chessBotTeam = '';
    this.updatedData = false;
  }

  newPlayer() {
    this.selectionFormSubmitted = true;
    this.createNewPlayer = true;
  }

  existingPlayer() {
    this.selectionFormSubmitted = true;
    this.playWithExistingPlayer = true;
    this.gameService.getPlayers().subscribe(data => {
      this.storedPlayers = Object.assign(this.storedPlayers, data);
      console.log('Successfully fetched players from db');
    }, err => {
      console.log('Problem with fetching players from db' + err);
    })
  }

  createPlayer() {
    this.createPlayerFormSubmited = true;

    this.gameService.createPlayer(this.player).subscribe(data => {
      console.log('Successfully created player: ');
      console.log(data);
      this.player = Object.assign(this.player, data);
      this.startGame();
    }, err => {
      console.log('Something went wrong. Unable to create player :(' + err);
    });
  }

  //chess bot id is 21 -> typeof: number
  getChessBot() {
    this.gameService.getPlayer(21).subscribe(data => {
      console.log("Successfully fetched Chess Bot from DB");
      this.chessBot = Object.assign(this.chessBot, data);
    }, err => {
      console.log("Problem with fetching Chess Bot " + err);
    })
  }

  addExistingPlayerToGame() {
    this.player = Object.assign(this.player, this.existingPlayer);
    this.existingPlayerSelectionFormSubmitted = true;
    this.startGame();
  }

  startGame() {
    this.getChessBot();
    if (this.playerColour == 'white') {
      this.chessBotTeam = 'black';
      this.startGamePlayerWhite = true;
    } else if (this.playerColour == 'black') {
      this.chessBotTeam = 'white';
      this.startGamePlayerBlack = true;
    }
  }

  gameOver(winner) {
    if (!this.updatedData) {
      if (winner.playerName == this.player.playerName) {
        this.player.wins += 1;
        this.player.points += 3;
        this.player.matchesPlayed += 1;
        this.gameService.updatePlayer(this.player.playerId, this.player).subscribe(data => {
          console.log('Successfully updated winner data');
          this._winner = winner;
          this.updatedData = true;
        }, err => {
          console.log('Something went wrong. Unable to update winner data ->' + err);
        });
      } else if (winner.playerName == this.chessBot.playerName) {
        this.chessBot.wins += 1;
        this.chessBot.points += 3;
        this.chessBot.matchesPlayed += 1;
        this.gameService.updatePlayer(this.chessBot.playerId, this.chessBot).subscribe(data => {
          console.log('Successfully updated winner data');
          this._winner = winner;
          this.updatedData = true;
        }, err => {
          console.log('Something went wrong. Unable to update winner data ->' + err);
        });
      }
    }
  }
}
