import { Component, OnInit } from '@angular/core';
import { Chessboard } from '../../../models/chessboard.model';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent implements OnInit {

  public chessboard: Chessboard;  

  constructor() {
    this.chessboard = new Chessboard();
  }

  ngOnInit(): void {
    this.chessboard.markBoard();
    this.chessboard.createPieces();
  }

  
}
