import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Chessboard } from '../../../models/chessboard.model';
import { ChessPiece } from '../../../models/chess-piece.model';
import { Rook } from '../../../models/rook.model';
import { Bishop } from '../../../models/bishop.model';
import { Queen } from '../../../models/queen.model';
import { Knight } from '../../../models/knight.model';
import { Player } from '../../../models/player.model';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent implements OnInit {

  @Input() player1: Player = new Player();
  @Input() player2: Player = new Player();
  @Input() chessBotColour = '';

  @Output() gameOverEvent: EventEmitter<any> = new EventEmitter<any>()

  public chessboard: Chessboard;

  public pieceToMove;
  public pieceToAttack;
  public moveStartPoint = "";
  public moveEndPoint = "";
  
  public playingVersusChessBot: boolean = false;
  public playersTurn: boolean = false;
  constructor() {
    this.chessboard = new Chessboard();
  }

  ngOnInit(): void {
    this.playingVersusChessBot = false;
    this.playersTurn = false;
    this.chessboard.chessBotColour = this.chessBotColour;

    this.chessboard.markBoard();
    this.chessboard.createPieces();
    this.chessboard.startChessBot();
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
    //console.log("Parent: " + $event);
    let promotedToPiece = $event;
    //console.log(promotedToPiece);
    switch (promotedToPiece) {
      case 'queen-black': {
        let queenBlack: ChessPiece = new Queen('110', 'queen', 9, 'black', true, this.chessboard.promotion.tileNumber, [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png');
        this.chessboard.piecesArray.splice(this.chessboard.promotion.pawnIndex, 1, queenBlack);
        break;
      }
      case 'rook-black': {
        let blackRook: ChessPiece = new Rook('106', 'rook', 5, 'black', true, this.chessboard.promotion.tileNumber, [], false, true, true, 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png')
        this.chessboard.piecesArray.splice(this.chessboard.promotion.pawnIndex, 1, blackRook);
        break;
      }
      case 'knight-black': {
        let knightBlack: ChessPiece = new Knight('120', 'knight', 3, 'black', true, this.chessboard.promotion.tileNumber, [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png');
        this.chessboard.piecesArray.splice(this.chessboard.promotion.pawnIndex, 1, knightBlack);
        break;
      }
      case 'bishop-black': {
        let blackBishop: ChessPiece = new Bishop('108', 'bishop', 3, 'black', true, this.chessboard.promotion.tileNumber, [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png');
        this.chessboard.piecesArray.splice(this.chessboard.promotion.pawnIndex, 1, blackBishop);
        break;
      }
      case 'queen-white': {
        let queenWhite: ChessPiece = new Queen('111', 'queen', 9, 'white', true, this.chessboard.promotion.tileNumber, [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png');
        this.chessboard.piecesArray.splice(this.chessboard.promotion.pawnIndex, 1, queenWhite);
        break;
      }
      case 'rook-white': {
        let whiteRook: ChessPiece = new Rook('105', 'rook', 5, 'white', true, this.chessboard.promotion.tileNumber, [], false, true, true, 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png')
        this.chessboard.piecesArray.splice(this.chessboard.promotion.pawnIndex, 1, whiteRook);
        break;
      }
      case 'knight-white': {
        let knightWhite: ChessPiece = new Knight('121', 'knight', 3, 'white', true, this.chessboard.promotion.tileNumber, [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png');
        this.chessboard.piecesArray.splice(this.chessboard.promotion.pawnIndex, 1, knightWhite);
        break;
      }
      case 'bishop-white': {
        let whiteBishop: ChessPiece = new Bishop('107', 'bishop', 3, 'white', true, this.chessboard.promotion.tileNumber, [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png');
        this.chessboard.piecesArray.splice(this.chessboard.promotion.pawnIndex, 1, whiteBishop);
        break;
      }
    }
    this.chessboard.promotion.active = false;
    this.chessboard.promotion.pawnIndex = 0;
    this.chessboard.promotion.team = '';
    this.chessboard.promotion.tileNumber = '';
  }

  checkGameOver() {
    if (this.chessboard.gameOver == true) {
      console.log(this.chessboard.winner);
      if (this.chessboard.winner == 'white') {
        console.log(this.player1.playerName + "wins!")
        this.gameOverEvent.emit(this.player1);
      } else {
        console.log(this.player2.playerName + "wins!")
        this.gameOverEvent.emit(this.player2);

      }
    }
  }

}

