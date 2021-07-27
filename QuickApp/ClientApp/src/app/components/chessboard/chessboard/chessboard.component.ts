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
        this.moveEndPoint = data.tileNumber.toString();
        // put here logic for enpassant and piece promotion

        //console.log("you want to move piece " + this.pieceToMove.id + " from " + this.moveStartPoint + " to tile + " + this.moveEndPoint);
        this.chessboard.movePiece(this.pieceToMove.id, this.moveEndPoint);
        this.resetMovePoints();
          
      }
    }
  }

  public recievePromotionInfo($event) {
    console.log("Parent: " + $event);
    let promotedToPiece = $event;
    console.log(promotedToPiece);
    switch (promotedToPiece) {
      case 'queen-black': {
        this.chessboard.piecesArray.splice(this.chessboard.promotion.pawnIndex, 1, new ChessPiece('100', 'queen', 8, 'black', true, this.chessboard.promotion.tileNumber, [], false, true, true, 'https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png'));
        break;
      }
      case 'rook-black': {
        this.chessboard.piecesArray.splice(this.chessboard.promotion.pawnIndex, 1, new ChessPiece('101', 'rook', 5, 'black', true, this.chessboard.promotion.tileNumber, [], false, true, true, 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png'));
        break;
      }
      case 'knight-black': {
        this.chessboard.piecesArray.splice(this.chessboard.promotion.pawnIndex, 1, new ChessPiece('102', 'knight', 3, 'black', true, this.chessboard.promotion.tileNumber, [], false, true, true, 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png'));
        break;
      }
      case 'bishop-black': {
        this.chessboard.piecesArray.splice(this.chessboard.promotion.pawnIndex, 1, new ChessPiece('103', 'bishop', 3, 'black', true, this.chessboard.promotion.tileNumber, [], false, true, true, 'https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png'));
        break;
      }
      case 'queen-white': {
        this.chessboard.piecesArray.splice(this.chessboard.promotion.pawnIndex, 1, new ChessPiece('104', 'queen', 8, 'white', true, this.chessboard.promotion.tileNumber, [], false, true, true, 'https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png'));
        break;
      }
      case 'rook-white': {
        this.chessboard.piecesArray.splice(this.chessboard.promotion.pawnIndex, 1, new ChessPiece('105', 'rook', 5, 'white', true, this.chessboard.promotion.tileNumber, [], false, true, true, 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png'));
        break;
      }
      case 'knight-white': {
        this.chessboard.piecesArray.splice(this.chessboard.promotion.pawnIndex, 1, new ChessPiece('106', 'knight', 3, 'white', true, this.chessboard.promotion.tileNumber, [], false, true, true, 'https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png'));
        break;
      }
      case 'bishop-white': {
        this.chessboard.piecesArray.splice(this.chessboard.promotion.pawnIndex, 1, new ChessPiece('107', 'bishop', 3, 'white', true, this.chessboard.promotion.tileNumber, [], false, true, true, 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png'));
        break;
      }
    }
    this.chessboard.promotion.active = false;
    this.chessboard.promotion.pawnIndex = 0;
    this.chessboard.promotion.team = '';
    this.chessboard.promotion.tileNumber = '';
  }

}

