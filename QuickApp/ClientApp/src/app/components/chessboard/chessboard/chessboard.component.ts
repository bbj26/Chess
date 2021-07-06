import { Component, OnInit } from '@angular/core';
import { Chessboard } from '../../../models/chessboard.model';
import { ChessPiece } from '../../../models/chess-piece.model';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent implements OnInit {

  public chessboard: Chessboard;

  public pieceToMove;
  public pieceToAttack;
  public moveStartPoint = "";
  public moveEndPoint = "";
  

  constructor() {
    this.chessboard = new Chessboard();
  }

  ngOnInit(): void {
    this.chessboard.markBoard();
    this.chessboard.createPieces();
  }

  resetMovePoints() {
    this.moveStartPoint = "";
    this.moveEndPoint = "";
  }

  //data is object sent from chessboardTile component with properties: chessPiece (null or ChessPiece) and tileNumber when clicked
  attemptMovePiece(data) {
    if (data.chessPiece != null) {
      if (this.moveStartPoint == "") {
        this.pieceToMove = data.chessPiece;
        this.moveStartPoint = this.pieceToMove.position;
        //console.log("you want to move piece " + this.pieceToMove.id + " from position " + this.moveStartPoint);
        //console.log("start-> " + this.moveStartPoint);
      } else if (this.moveStartPoint != "") {
        this.pieceToAttack = data.chessPiece;
        this.moveEndPoint = this.pieceToAttack.position;
        //console.log("you want to eat piece " + this.pieceToAttack.id + " on position " + this.moveEndPoint + "with piece " + this.pieceToMove.id);
        //console.log("end-> " + this.moveEndPoint);
        this.chessboard.attackPiece(this.pieceToMove.id, this.pieceToAttack.id);
        this.resetMovePoints();
      }
      
    } else {
      if (this.moveStartPoint != "") {
        this.moveEndPoint = data.tileNumber;
        //console.log("you want to move piece " + this.pieceToMove.id + " from " + this.moveStartPoint + " to tile + " + this.moveEndPoint);
        this.chessboard.movePiece(this.pieceToMove.id, this.moveEndPoint);
        this.resetMovePoints();
      }
    }
  }
}

