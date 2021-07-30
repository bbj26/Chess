export class ChessPiece {
  constructor(id?: string, name?: string, value?: number, team?: string, active?: boolean, position?: string, potentialMoves?: string[],
    underAttack?: boolean, canAttack?: boolean, touched?: boolean, imgUrl?: string) {
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
    this.boardBorders = {
      left: ['0', '8', '16', '24', '32', '40', '48', '56'],
      right: ['7', '15', '23', '31', '39', '47', '55', '63'],
      top: ['0', '1', '2', '3', '4', '5', '6', '7'],
      bottom: ['56', '57', '58', '59', '60', '61', '62', '63'],
    };
  }

  

  public checkPositionLeftBorder() {
    return this.boardBorders.left.some(position => position == this.position);
  }

  public checkPositionRightBorder() {
    return this.boardBorders.right.some(position => position == this.position);
  }

  public checkPositionTopBorder() {
    return this.boardBorders.top.some(position => position == this.position);
  }

  public checkPositionBottomBorder() {
    return this.boardBorders.bottom.some(position => position == this.position);
  }

  // Functions for Queen, Bishop and Rook
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
  //

  calculatePotentialMoves(chessPiecesArray: ChessPiece[]) {
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
  public boardBorders: {
    left: string[],
    right: string[],
    top: string[],
    bottom: string[]
  };
}
