import { Component, OnInit } from '@angular/core';
import { ChessPiece } from 'src/app/models/chess-piece.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  playersList: any;
  rankedList: any;
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.playersList = [];
    this.rankedList = [];
    this.getPlayers();
  }

  getPlayers() {
    this.gameService.getPlayers().subscribe(data => {
      this.playersList = data;
      this.sortPlayers();
    }, err => {
      console.log(err)
    })
  }

  sortPlayers() {
    this.rankedList = this.playersList.filter(player => player.points > 0).sort((p1, p2) => (p1.points > p2.points) ? -1 : 1);
  }

}
