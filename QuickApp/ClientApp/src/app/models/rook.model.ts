import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChessPiece } from '../models/chess-piece.model';

export class Rook extends ChessPiece {
  constructor(id?: string, name?: string, value?: number, team?: string, active?: boolean, position?: string, potentialMoves?: string[],
    underAttack?: boolean, canAttack?: boolean, touched?: boolean, imgUrl?: string) {
    super();
    this.id = id;
    this.name = name;
    this.value = value;
    this.team = team;
    this.active = active;
    this.position = position;
    this.potentialMoves = potentialMoves;
    this.underAttack = underAttack;
    this.canAttack = canAttack;
    this.touched = touched;
    this.imgUrl = imgUrl;
  }

  checkMoveUp(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    let currentPosition = Number(thisPosition);
    
    if (thisTeam == 'white' && thisPosition >= 8) {
      let potentialPosition = currentPosition - 8;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        this.potentialMoves.push(potentialPosition.toString());
        if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team != thisTeam) == false) {
          this.checkMoveUp(chessPiecesArray, thisTeam, potentialPosition);
        }
      }
    } else if (thisTeam == 'black' && thisPosition <= 55) {
      let potentialPosition = currentPosition + 8;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        this.potentialMoves.push(potentialPosition.toString());
        if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team != thisTeam) == false) {
          this.checkMoveUp(chessPiecesArray, thisTeam, potentialPosition);
        }
      }
    }
  }

  checkMoveDown(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    let currentPosition = Number(thisPosition);

    if (thisTeam == 'white' && thisPosition <= 55) {
      let potentialPosition = currentPosition + 8;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        this.potentialMoves.push(potentialPosition.toString());
        if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team != thisTeam) == false) {
          this.checkMoveDown(chessPiecesArray, thisTeam, potentialPosition);
        }
      }
    } else if (thisTeam == 'black' && thisPosition >= 8) {
      let potentialPosition = currentPosition - 8;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        this.potentialMoves.push(potentialPosition.toString());
        if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team != thisTeam) == false) {
          this.checkMoveDown(chessPiecesArray, thisTeam, potentialPosition);
        }
      }
    }
  }

  checkMoveLeft(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    if (Number(thisPosition) >= 0) {
      let currentPosition = Number(thisPosition);
      if (this.checkPositionLeftBorder() == false) {
        if (this.boardBorders.left.some(position => position == currentPosition.toString()) == false) {
          let potentialPosition = currentPosition - 1;
          if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
            this.potentialMoves.push(potentialPosition.toString());
            if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team != thisTeam) == false) {
              this.checkMoveLeft(chessPiecesArray, thisTeam, potentialPosition);
            }
          }
        } 
      }
    }
  }

  checkMoveRight(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    if (Number(thisPosition) <= 63) {
      let currentPosition = Number(thisPosition);
      if (this.checkPositionRightBorder() == false) {
        if (this.boardBorders.right.some(position => position == currentPosition.toString()) == false) {
          let potentialPosition = currentPosition + 1;
          if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
            this.potentialMoves.push(potentialPosition.toString());
            if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team != thisTeam) == false) {
              this.checkMoveRight(chessPiecesArray, thisTeam, potentialPosition);
            }
          }
        }
      }
    }
  }

  calculatePotentialMoves(chessPiecesArray: ChessPiece[]) {
    this.potentialMoves = [];

    this.checkMoveUp(chessPiecesArray, this.team, this.position);
    this.checkMoveDown(chessPiecesArray, this.team, this.position);
    this.checkMoveLeft(chessPiecesArray, this.team, this.position);
    this.checkMoveRight(chessPiecesArray, this.team, this.position);
 
  }


  public id: string;
  public name: string;
  public value: number;
  public team: string;
  public active: boolean;
  public position: string;
  public potentialMoves: string[];
  public underAttack: boolean;
  public canAttack: boolean;
  public touched: boolean;
  public imgUrl: string;
}
