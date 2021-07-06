import { ChessPiece } from '../models/chess-piece.model'

export class Chessboard {
  constructor() {
    this.verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
    this.horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
    this.chessboardMarks = new Array();
    this.tileNumbers = new Array();
    this.tileColors = new Array();
  }

  public tileColors: string[];
  public tileNumbers: number[];
  public chessboardMarks: string[];
  public verticalAxis: string[];
  public horizontalAxis: string[];
  public piecesArray: ChessPiece[];

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
    this.piecesArray = [];
    this.piecesArray.push(new ChessPiece('1', 'pijun', 1, 'black', true, '6', [], false, true, false, null));
    this.piecesArray.push(new ChessPiece('2', 'pijun', 1, 'white', true, '7', [], false, true, false, null));
    this.piecesArray.push(new ChessPiece('3', 'pijun', 1, 'black', true, '8', [], false, true, false, null));
  }

  resetPieceProperties(piece: ChessPiece) {
    piece.active = undefined;
    piece.canAttack = undefined;
    piece.id = undefined;
    piece.imgUrl = undefined;
    piece.name = undefined;
    piece.position = undefined;
    piece.potentialMoves = undefined;
    piece.team = undefined;
    piece.touched = undefined;
    piece.underAttack = undefined;
    piece.value = undefined;
  }

  //Legal moves are contained in potentialMoves array of each piece
  isLegalMove(chessPiece: ChessPiece, newPosition: string) {
    var activePiece = this.piecesArray.find(piece => piece.id == chessPiece.id);
    return activePiece.potentialMoves.some(move => move == newPosition);
  }

  canAttackPiece(attacker: ChessPiece, defender: ChessPiece) {
    if (attacker.active && defender.active && (attacker.team != defender.team) && this.isLegalMove(attacker, defender.position)) {
      return true;
    } else {
      return false;
    }
  }

  //makes move to an empty tile if the move follows game rules
  movePiece(pieceId: string, newPosition: string) {
    this.piecesArray.forEach(piece => {
      if (piece.id == pieceId) { 
        if (this.isLegalMove(piece, newPosition)) {            // uncomment later to check legality of move
          piece.position = newPosition;
        } 
      }
    })
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
      this.piecesArray.forEach(piece => {
        if (piece.id == attackedPieceId && piece.id != attackingPiece.id) {
          piece.active = false;
        }
      });
      this.movePiece(attackingPieceId, attackedPiece.position);
      //console.log("Successfully eat " + attackedPiece.id);
    }
  }

}




