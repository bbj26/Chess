import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChessPiece } from '../models/chess-piece.model';
import { Pawn } from '../models/pawn.model';

export class King extends ChessPiece {
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

  checkMoveOneUp(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    let currentPosition = Number(thisPosition);

    if (this.boardBorders.top.some(position => position == thisPosition) == false) {
      let potentialPosition = currentPosition - 8;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        this.potentialMoves.push(potentialPosition.toString());
      }
    }
  }

  checkMoveOneDown(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    let currentPosition = Number(thisPosition);

    if (this.boardBorders.bottom.some(position => position == thisPosition) == false) {
      let potentialPosition = currentPosition + 8;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        this.potentialMoves.push(potentialPosition.toString());
      }
    }
  }

  checkMoveOneRight(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    let currentPosition = Number(thisPosition);

    if (this.boardBorders.right.some(position => position == thisPosition) == false) {
      let potentialPosition = currentPosition + 1;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        this.potentialMoves.push(potentialPosition.toString());
      }
    }
  }

  checkMoveOneLeft(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    let currentPosition = Number(thisPosition);

    if (this.boardBorders.left.some(position => position == thisPosition) == false) {
      let potentialPosition = currentPosition - 1;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        this.potentialMoves.push(potentialPosition.toString());
      }
    }
  }

  checkMoveDiagonalUpLeft(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    let currentPosition = Number(thisPosition);

    if (this.boardBorders.left.some(position => position == thisPosition) == false && this.boardBorders.top.some(position => position == thisPosition) == false) {
      let potentialPosition = currentPosition - 9;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        this.potentialMoves.push(potentialPosition.toString());
      }
    }
  }

  checkMoveDiagonalUpRight(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    let currentPosition = Number(thisPosition);

    if (this.boardBorders.right.some(position => position == thisPosition) == false && this.boardBorders.top.some(position => position == thisPosition) == false) {
      let potentialPosition = currentPosition - 7;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        this.potentialMoves.push(potentialPosition.toString());
      }
    }
  }

  checkMoveDiagonalDownRight(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    let currentPosition = Number(thisPosition);

    if (this.boardBorders.right.some(position => position == thisPosition) == false && this.boardBorders.bottom.some(position => position == thisPosition) == false) {
      let potentialPosition = currentPosition + 9;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        this.potentialMoves.push(potentialPosition.toString());
      }
    }
  }

  checkMoveDiagonalDownLeft(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    let currentPosition = Number(thisPosition);

    if (this.boardBorders.left.some(position => position == thisPosition) == false && this.boardBorders.bottom.some(position => position == thisPosition) == false) {
      let potentialPosition = currentPosition + 7;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        this.potentialMoves.push(potentialPosition.toString());
      }
    }
  }

  calculatePotentialMoves(chessPiecesArray: ChessPiece[]) {
    this.potentialMoves = [];

    this.checkMoveOneUp(chessPiecesArray, this.team, this.position);
    this.checkMoveOneDown(chessPiecesArray, this.team, this.position);
    this.checkMoveOneLeft(chessPiecesArray, this.team, this.position);
    this.checkMoveOneRight(chessPiecesArray, this.team, this.position);
    this.checkMoveDiagonalUpLeft(chessPiecesArray, this.team, this.position);
    this.checkMoveDiagonalUpRight(chessPiecesArray, this.team, this.position);
    this.checkMoveDiagonalDownLeft(chessPiecesArray, this.team, this.position);
    this.checkMoveDiagonalDownRight(chessPiecesArray, this.team, this.position);
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
