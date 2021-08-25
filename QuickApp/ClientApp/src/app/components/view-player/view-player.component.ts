import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.scss']
})
export class ViewPlayerComponent implements OnInit {

  playerDetails: any;
  playerId: string = '';

  constructor(private gameService: GameService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.playerId = data.id;
    })

    this.gameService.viewPlayer(this.playerId).subscribe(data => {
      this.playerDetails = data;
    })
  }

}
