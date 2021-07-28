import { ChessPiece } from '../models/chess-piece.model';

export class Pawn extends ChessPiece {
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

  public potentialEnPassantMoves = [];
  
  checkEnPassant(chessPiecesArray: ChessPiece[], thisTeam) {
    this.potentialEnPassantMoves = [];
    //pawn eats opponents pawn next to it horizontally, when on his team's half of chessboard - EN PASSANT
    chessPiecesArray.forEach(piece => {
      //check if white pawn is on its half
      if (Number(this.position) >= 32 && thisTeam == "white") {

        //push enpassant move to potential moves array if all reqs are satisfied
        if (this.checkPositionLeftBorder() == true) {
          if (piece.name == 'pawn' && piece.team == "black" && piece.position == (Number(this.position) + 1).toString()) {
            this.potentialMoves.push((Number(piece.position) - 8).toString());
            this.potentialEnPassantMoves.push((Number(piece.position) - 8).toString());
            this.canAttack == true;
          }
        } else if (this.checkPositionRightBorder() == true) {
          if (piece.name == 'pawn' && piece.team == "black" && piece.position == (Number(this.position) - 1).toString()) {
            this.potentialMoves.push((Number(piece.position) - 8).toString());
            this.potentialEnPassantMoves.push((Number(piece.position) - 8).toString());
            this.canAttack == true;
          }
        } else {
          if (piece.name == 'pawn' && piece.team == "black" && (piece.position == (Number(this.position) + 1).toString() || piece.position == (Number(this.position) - 1).toString())) {
            this.potentialMoves.push((Number(piece.position) - 8).toString());
            this.potentialEnPassantMoves.push((Number(piece.position) - 8).toString());
            this.canAttack == true;
          }
        }
      } else if (Number(this.position) <= 31 && thisTeam == "black") {

        if (this.checkPositionLeftBorder() == true) {
          if (piece.name == 'pawn' && piece.team == "white" && piece.position == (Number(this.position) + 1).toString()) {
            this.potentialMoves.push((Number(piece.position) + 9).toString());
            this.potentialEnPassantMoves.push((Number(piece.position) + 9).toString());
            this.canAttack == true;
           }
        } else if (this.checkPositionRightBorder() == true) {
          if (piece.name == 'pawn' && piece.team == "white" && piece.position == (Number(this.position) - 1).toString()) {
            this.potentialMoves.push((Number(piece.position) + 7).toString());
            this.potentialEnPassantMoves.push((Number(piece.position) + 7).toString());
            this.canAttack == true;
          }
        } else {
          if (piece.name == 'pawn' && piece.team == "white" && (piece.position == (Number(this.position) + 1).toString() || piece.position == (Number(this.position) - 1).toString())) {
            this.potentialMoves.push((Number(piece.position) + 8).toString());
            this.potentialEnPassantMoves.push((Number(piece.position) + 8).toString());
            this.canAttack == true;
          }
        }
      }
    })
  }
  checkMovePawnUp(chessPiecesArray: ChessPiece[], thisTeam) {
    let currentPosition = this.position;
    if (thisTeam == 'white') {
      //check if pawn can go one tile up
      let newPotentialPosition = (Number(currentPosition) - 8).toString();
      let newPotentialPositionOccupied = chessPiecesArray.some(piece =>
        piece.position == newPotentialPosition
      );
      if (newPotentialPositionOccupied == false) {
        this.potentialMoves.push(newPotentialPosition);
      }

      //check if pawn can go two tiles up
      let newPotentialPosition2 = (Number(currentPosition) - 16).toString();
      newPotentialPositionOccupied = chessPiecesArray.some(piece => {
        if (piece.position == newPotentialPosition2 || piece.position == newPotentialPosition) {
          return true;
        } else {
          return false;
        }
      });
      if (newPotentialPositionOccupied == false && this.touched == false) {
        this.potentialMoves.push(newPotentialPosition2);
      };

    } else if (thisTeam == 'black') {
      //one tile up
      let newPotentialPosition = (Number(currentPosition) + 8).toString();
      let newPotentialPositionOccupied = chessPiecesArray.some(piece =>
        piece.position == newPotentialPosition
      );
      if (newPotentialPositionOccupied == false) {
        this.potentialMoves.push(newPotentialPosition);
      }

      //two tiles up
      let newPotentialPosition2 = (Number(currentPosition) + 16).toString();
      newPotentialPositionOccupied = chessPiecesArray.some(piece => {
        if (piece.position == newPotentialPosition2 || piece.position == newPotentialPosition) {
          return true;
        } else {
          return false;
        }
      })
      if (newPotentialPositionOccupied == false && this.touched == false) {
        this.potentialMoves.push(newPotentialPosition2);
      }
    }
  }
  checkPawnAttack(chessPiecesArray: ChessPiece[], thisTeam) {
    let currentPosition = this.position;
    let potentialAttacks = [];

    chessPiecesArray.forEach(piece => {
      if (this.team == "white" && piece.team != thisTeam) {
        if (this.checkPositionLeftBorder() == true) {
          if ((piece.position == (Number(currentPosition) - 7).toString())) {
            this.canAttack == true;
            potentialAttacks.push(piece.position);
          }
        } else if (this.checkPositionRightBorder() == true) {
          if (piece.position == (Number(currentPosition) - 9).toString()) {
            this.canAttack == true;
            potentialAttacks.push(piece.position);
          };
        } else {
          if ((piece.position == (Number(currentPosition) - 7).toString() || piece.position == (Number(currentPosition) - 9).toString())) {
            this.canAttack == true;
            potentialAttacks.push(piece.position);
          };
        }
        
      } else if (this.team == "black" && piece.team != thisTeam) {
        if (this.checkPositionLeftBorder() == true) {
          if ((piece.position == (Number(currentPosition) + 9).toString())) {
            this.canAttack == true;
            potentialAttacks.push(piece.position);
          }
        } else if (this.checkPositionRightBorder() == true) {
          if (piece.position == (Number(currentPosition) + 7).toString()) {
            this.canAttack == true;
            potentialAttacks.push(piece.position);
          };
        } else {
          if ((piece.position == (Number(currentPosition) + 7).toString() || piece.position == (Number(currentPosition) + 9).toString())) {
            this.canAttack == true;
            potentialAttacks.push(piece.position);
          };
        }
      }      
    });
    this.potentialMoves = this.potentialMoves.concat(potentialAttacks);
    //console.log(this.position + "    " + this.potentialMoves);

  }

  calculatePotentialMoves(chessPiecesArray: ChessPiece[]) {
    this.potentialMoves = [];
   
    this.checkMovePawnUp(chessPiecesArray, this.team);
    this.checkPawnAttack(chessPiecesArray, this.team);
    this.checkEnPassant(chessPiecesArray, this.team);
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
