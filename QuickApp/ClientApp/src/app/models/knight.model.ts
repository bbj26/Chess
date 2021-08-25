import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChessPiece } from '../models/chess-piece.model';

export class Knight extends ChessPiece {
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

  //check potential moves to the left hand side
  checkClockwise11(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    if (this.boardBorders.left.some(pos => pos == thisPosition) == false && this.boardBorders.top.some(pos => (Number(pos) - 8) == Number(thisPosition)) == false) {
      let currentPosition = Number(thisPosition);
      let potentialPosition = currentPosition - 17;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        if (potentialPosition >= 0 && potentialPosition <= 63) {
          this.potentialMoves.push(potentialPosition.toString());
        }
      }
    }
  }

  checkClockwis10(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    if (this.boardBorders.left.some(pos => pos == thisPosition || (Number(pos) + 1) == Number(thisPosition)) == false) {
      let currentPosition = Number(thisPosition);
      let potentialPosition = currentPosition - 10;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        if (potentialPosition >= 0 && potentialPosition <= 63) {
          this.potentialMoves.push(potentialPosition.toString());
        }
      }
    }
  }

  checkClockwise8(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    if (this.boardBorders.left.some(pos => pos == thisPosition || (Number(pos) + 1) == Number(thisPosition)) == false) {
      let currentPosition = Number(thisPosition);
      let potentialPosition = currentPosition + 6;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        if (potentialPosition >= 0 && potentialPosition <= 63) {
          this.potentialMoves.push(potentialPosition.toString());
        }
      }
    }
  }

  checkClockwise7(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    if (this.boardBorders.left.some(pos => pos == thisPosition) == false && this.boardBorders.bottom.some(pos => (Number(pos) - 8) == Number(thisPosition)) == false) {
      let currentPosition = Number(thisPosition);
      let potentialPosition = currentPosition + 15;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        if (potentialPosition >= 0 && potentialPosition <= 63) {
          this.potentialMoves.push(potentialPosition.toString());
        }
      }
    }
  }
  //

  //check potential moves to the right hand side
  checkClockwise1(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    if (this.boardBorders.right.some(pos => pos == thisPosition) == false && this.boardBorders.top.some(pos => (Number(pos) - 8) == Number(thisPosition)) == false) {
      let currentPosition = Number(thisPosition);
      let potentialPosition = currentPosition - 15;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        if (potentialPosition >= 0 && potentialPosition <= 63) {
          this.potentialMoves.push(potentialPosition.toString());
        }
      }
    }
  }

  checkClockwise2(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    if (this.boardBorders.right.some(pos => pos == thisPosition || (Number(pos) - 1) == Number(thisPosition)) == false) {
      let currentPosition = Number(thisPosition);
      let potentialPosition = currentPosition - 6;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        if (potentialPosition >= 0 && potentialPosition <= 63) {
          this.potentialMoves.push(potentialPosition.toString());
        }
      }
    }
  }

  checkClockwise4(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    if (this.boardBorders.right.some(pos => pos == thisPosition || (Number(pos) - 1) == Number(thisPosition)) == false) {
      let currentPosition = Number(thisPosition);
      let potentialPosition = currentPosition + 10;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        if (potentialPosition >= 0 && potentialPosition <= 63) {
          this.potentialMoves.push(potentialPosition.toString());
        }
      }
    }
  }

  checkClockwise5(chessPiecesArray: ChessPiece[], thisTeam, thisPosition) {
    if (this.boardBorders.right.some(pos => pos == thisPosition) == false && this.boardBorders.bottom.some(pos => (Number(pos) - 8) == Number(thisPosition)) == false) {
      let currentPosition = Number(thisPosition);
      let potentialPosition = currentPosition + 17;
      if (chessPiecesArray.some(piece => piece.position == potentialPosition.toString() && piece.team == thisTeam) == false) {
        if (potentialPosition >= 0 && potentialPosition <= 63) {
          this.potentialMoves.push(potentialPosition.toString());
        }
      }
    }
  }


  calculatePotentialMoves(chessPiecesArray: ChessPiece[]) {
    this.potentialMoves = [];

    this.checkClockwise11(chessPiecesArray, this.team, this.position);
    this.checkClockwis10(chessPiecesArray, this.team, this.position);
    this.checkClockwise8(chessPiecesArray, this.team, this.position);
    this.checkClockwise7(chessPiecesArray, this.team, this.position);
    this.checkClockwise1(chessPiecesArray, this.team, this.position);
    this.checkClockwise2(chessPiecesArray, this.team, this.position);
    this.checkClockwise4(chessPiecesArray, this.team, this.position);
    this.checkClockwise5(chessPiecesArray, this.team, this.position);
    
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
