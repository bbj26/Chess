import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChessPiece } from '../models/chess-piece.model';

export class Bishop extends ChessPiece {
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

  checkDiagonalUpRight(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {

    if (this.boardBorders.right.some(pos => pos == thisPosition) == false) {
      let currentPosition = Number(thisPosition);
      let potentialPosition = currentPosition - 7;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        if (potentialPosition >= 0 && potentialPosition <= 63) {
          this.potentialMoves.push(potentialPosition.toString());
          if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team != thisTeam) == false) {
            if (!this.boardBorders.right.some(position => position == (currentPosition - 7).toString())) {
              this.checkDiagonalUpRight(chessPiecesArray, thisTeam, potentialPosition);

            }
          }
        }
      }
    }
  }

  checkDiagonalDownRight(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {

    if (thisPosition >= 0 && thisPosition <= 63 && this.boardBorders.right.some(pos => pos == thisPosition) == false) {
      let currentPosition = Number(thisPosition);
      let potentialPosition = currentPosition + 9;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        if (potentialPosition >= 0 && potentialPosition <= 63) {
          this.potentialMoves.push(potentialPosition.toString());
          if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team != thisTeam) == false) {
            if (!this.boardBorders.right.some(position => position == (currentPosition + 9).toString())) {
              this.checkDiagonalDownRight(chessPiecesArray, thisTeam, potentialPosition);

            }
          }
        }
      }
    }
  }

  checkDiagonalUpLeft(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {

    if (this.boardBorders.left.some(pos => pos == thisPosition) == false) {
      let currentPosition = Number(thisPosition);
      let potentialPosition = currentPosition - 9;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        if (potentialPosition >= 0 && potentialPosition <= 63) {
          this.potentialMoves.push(potentialPosition.toString());
          if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team != thisTeam) == false) {
            if (!this.boardBorders.right.some(position => position == (currentPosition - 9).toString())) {
              this.checkDiagonalUpLeft(chessPiecesArray, thisTeam, potentialPosition);
            }
          }

        }
      }
    }
  }

  checkDiagonalDownLeft(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {

    if (this.boardBorders.left.some(pos => pos == thisPosition) == false) {
      let currentPosition = Number(thisPosition);
      let potentialPosition = currentPosition + 7;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        if (potentialPosition >= 0 && potentialPosition <= 63) {
          this.potentialMoves.push(potentialPosition.toString());
          if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team != thisTeam) == false) {
            if (!this.boardBorders.right.some(position => position == (currentPosition + 7).toString())) {
              this.checkDiagonalDownLeft(chessPiecesArray, thisTeam, potentialPosition);
            }
          }

        }
      }
    }
  }


  calculatePotentialMoves(chessPiecesArray: ChessPiece[]) {
    this.potentialMoves = [];

    this.checkDiagonalUpRight(chessPiecesArray, this.team, this.position);
    this.checkDiagonalDownRight(chessPiecesArray, this.team, this.position);
    this.checkDiagonalUpLeft(chessPiecesArray, this.team, this.position);
    this.checkDiagonalDownLeft(chessPiecesArray, this.team, this.position);
   
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
