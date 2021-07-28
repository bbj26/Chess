import { ActivationEnd } from '@angular/router';
import { ChessPiece } from '../models/chess-piece.model';
import { Pawn } from '../models/pawn.model';
import { Rook } from '../models/rook.model';

export class Chessboard {
  constructor() {
    this.verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
    this.horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
    this.chessboardMarks = new Array();
    this.tileNumbers = new Array();
    this.tileColors = new Array();
    this.promotion = {
      active: false,
      team: '',
      tileNumber: '',
      pawnIndex: 0
    };
  }

  public promotion: {
    active: boolean,
    team: string,
    tileNumber: string
    pawnIndex: number
  };
  public tileColors: string[];
  public tileNumbers: number[];
  public chessboardMarks: string[];
  public verticalAxis: string[];
  public horizontalAxis: string[];
  public piecesArray: ChessPiece[];
  public inactivePiecesArray: ChessPiece[];
   
  markBoard = () => {
    let counter = 0;
    for (let j = this.verticalAxis.length - 1; j >= 0; j--) {
      for (let i = 0; i <= this.horizontalAxis.length - 1; i++) {
        this.chessboardMarks.push(this.horizontalAxis[i] + this.verticalAxis[j]);
        this.tileNumbers.push(counter++);
        if ((i + j) % 2 == 0) {
          this.tileColors.push("black");
        } else {
          this.tileColors.push("white");
        }
      }
    }
  }

  createPieces() {
    this.inactivePiecesArray = [];
    this.piecesArray = [];
    let pawnWhite1: ChessPiece = new Pawn('44', 'pawn', 1, 'white', true, '48', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');
    let pawnWhite2: ChessPiece = new Pawn('45', 'pawn', 1, 'white', true, '49', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');
    let pawnWhite3: ChessPiece = new Pawn('46', 'pawn', 1, 'white', true, '50', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');
    let pawnWhite4: ChessPiece = new Pawn('47', 'pawn', 1, 'white', true, '51', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');
    let pawnWhite5: ChessPiece = new Pawn('48', 'pawn', 1, 'white', true, '52', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');
    let pawnWhite6: ChessPiece = new Pawn('49', 'pawn', 1, 'white', true, '53', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');
    let pawnWhite7: ChessPiece = new Pawn('50', 'pawn', 1, 'white', true, '54', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');
    let pawnWhite8: ChessPiece = new Pawn('51', 'pawn', 1, 'white', true, '55', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');

    let pawnBlack1: ChessPiece = new Pawn('52', 'pawn', 1, 'black', true, '8', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');
    let pawnBlack2: ChessPiece = new Pawn('53', 'pawn', 1, 'black', true, '9', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');
    let pawnBlack3: ChessPiece = new Pawn('54', 'pawn', 1, 'black', true, '10', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');
    let pawnBlack4: ChessPiece = new Pawn('55', 'pawn', 1, 'black', true, '11', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');
    let pawnBlack5: ChessPiece = new Pawn('56', 'pawn', 1, 'black', true, '12', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');
    let pawnBlack6: ChessPiece = new Pawn('57', 'pawn', 1, 'black', true, '13', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');
    let pawnBlack7: ChessPiece = new Pawn('58', 'pawn', 1, 'black', true, '14', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');
    let pawnBlack8: ChessPiece = new Pawn('59', 'pawn', 1, 'black', true, '15', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');

    let rookWhite1: ChessPiece = new Rook('40', 'rook', 5, 'white', true, '56', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png');
    let rookWhite2: ChessPiece = new Rook('41', 'rook', 5, 'white', true, '63', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png');
    let rookBlack1: ChessPiece = new Rook('42', 'rook', 5, 'black', true, '0', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png');
    let rookBlack2: ChessPiece = new Rook('43', 'rook', 5, 'black', true, '7', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png');
    this.piecesArray.push(pawnWhite1, pawnWhite2, pawnWhite3, pawnWhite4, pawnWhite5, pawnWhite6, pawnWhite7, pawnWhite8, pawnBlack1, pawnBlack2, pawnBlack3, pawnBlack4, pawnBlack5, pawnBlack6,pawnBlack7, pawnBlack8, rookWhite1, rookWhite2, rookBlack1, rookBlack2);
    //console.log(this.piecesArray);
    //console.log(pawnWhite);
  }

  //Legal moves are contained in potentialMoves array of each piece
  isLegalMove(chessPiece: ChessPiece, newPosition: string) {
    let activePiece = this.piecesArray.find(piece => piece.id == chessPiece.id);
    let result = activePiece.potentialMoves.some(move => move == newPosition);
    return result;
  }

  canAttackPiece(attacker: ChessPiece, defender: ChessPiece) {
    if (attacker.active && defender.active && (attacker.team != defender.team) && this.isLegalMove(attacker, defender.position) && this.promotion.active == false) {
      return true;
    } else {
      return false;
    }
  }

  //makes move to an empty tile if the move follows game rules
  movePiece(pieceId: string, newPosition: string) {

    if (this.promotion.active == false) {
      this.enPassantAttack(pieceId, newPosition);

      this.piecesArray.forEach(piece => {
        if (piece.id == pieceId) {
          if (this.isLegalMove(piece, newPosition)) {
            piece.position = newPosition;
            piece.touched = true;
          }
        }
      });
      //console.log(this.piecesArray);

      this.pawnPromotion(pieceId, newPosition);
    }
  }

  attackPiece(attackingPieceId: string, attackedPieceId: string) {
    var attackingPiece: ChessPiece;
    var attackedPiece: ChessPiece;

    this.piecesArray.forEach(piece => {
      if (piece.id == attackingPieceId) {
        attackingPiece = piece;
        //console.log("attacking piece is " + attackingPiece.id);
        //console.log(attackingPiece);
      }

      if (piece.id == attackedPieceId) {
        attackedPiece = piece;
        //console.log("attacked piece is " + attackedPiece.id);
        //console.log(attackedPiece);
      }
    });
    
    //Check if attacking piece can attack attacked piece and proceed with attack if true
    if (this.canAttackPiece(attackingPiece, attackedPiece)) {
      let index = 0;
      this.piecesArray.forEach(piece => {
        index = index + 1;
        if (piece.id == attackedPieceId && piece.id != attackingPiece.id) {
          //remove attacked piece from pieces array and push it to inactive pieces
          this.piecesArray.splice(index - 1, 1);
          this.inactivePiecesArray.push(piece);
        }
      });
      //this.inactivePiecesArray.push(attackedPiece);

      this.movePiece(attackingPieceId, attackedPiece.position);
      //console.log("Successfully eat " + attackedPiece.id);
    }
  }

  //checks if move is EnPassant attack and proceeds with it if true
  enPassantAttack(pieceId: string, newPosition: string) {
    let attacker = this.piecesArray.find(piece => piece.id == pieceId);
    if (attacker.name == "pawn") {
      let pawnAttacker = new Pawn();
      Object.assign(pawnAttacker, attacker);
      if (pawnAttacker.potentialEnPassantMoves.some(move => move == newPosition) == true) {
        if (attacker.team == "white") {
          let attackedPosition = (Number(newPosition) + 8).toString();
          let attackedPawn = this.piecesArray.findIndex(piece => piece.position == attackedPosition);
          this.piecesArray.splice(attackedPawn, 1);
        }
        else {
          let attackedPosition = (Number(newPosition) - 8).toString();
          let attackedPawn = this.piecesArray.findIndex(piece => piece.position == attackedPosition);
          this.piecesArray.splice(attackedPawn, 1);
        }
      };
    }
  }

  
  pawnPromotion(pieceId: string, newPostion: string) {
    let piece = this.piecesArray.find(piece => piece.id == pieceId);
    if (piece.name == "pawn") {
      if (piece.team == "white" && piece.checkPositionTopBorder() == true) {
        let pawnIndex = this.piecesArray.findIndex(_piece => _piece.id == piece.id);

        this.promotion.active = true;
        this.promotion.tileNumber = newPostion;
        this.promotion.team = 'white';
        this.promotion.pawnIndex = pawnIndex;

      } else if (piece.team == 'black' && piece.checkPositionBottomBorder() == true) {
        let pawnIndex = this.piecesArray.findIndex(_piece => _piece.id == piece.id);

        this.promotion.active = true;
        this.promotion.tileNumber = newPostion;
        this.promotion.team = 'black';
        this.promotion.pawnIndex = pawnIndex;

      }
    }
  }
}




