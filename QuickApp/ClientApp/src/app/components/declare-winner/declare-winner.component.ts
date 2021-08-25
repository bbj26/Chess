import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-declare-winner',
  templateUrl: './declare-winner.component.html',
  styleUrls: ['./declare-winner.component.scss']
})
export class DeclareWinnerComponent implements OnInit {

  @Input() winner: Player = new Player;
  @Input() gameOver: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
