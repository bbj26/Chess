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
    this.jumpedTwoTiles = {
      jumped: false,
      roundNo: 0
    }
  }

  public potentialPawnAttacks = [];
  public jumpedTwoTiles: {
    jumped: boolean;
    roundNo: number;
  }
  public potentialTwoTilesJumpMoves = [];
  public potentialEnPassantMoves = [];
  
  checkEnPassant(chessPiecesArray: ChessPiece[], thisTeam) {
    this.potentialEnPassantMoves = [];
    let opponentsPawns = chessPiecesArray.filter(pawn => pawn.team != thisTeam);
    if (this.checkPositionLeftBorder() == true) {
      if (opponentsPawns.some(pawn => pawn.position == (Number(this.position) + 1).toString() && pawn.jumpedTwoTiles.jumped == true)) {
        switch (this.team) {
          case 'white': {
            this.potentialEnPassantMoves.push((Number(this.position) - 7).toString());
            //this.potentialMoves.push((Number(this.position) - 7).toString());
            break;
          }
          case 'black': {
            this.potentialEnPassantMoves.push((Number(this.position) + 9).toString());
            //this.potentialMoves.push((Number(this.position) + 9).toString());
            break;
          }
        }
      }
    } else if (this.checkPositionRightBorder() == true) {
      if (opponentsPawns.some(pawn => pawn.position == (Number(this.position) - 1).toString() && pawn.jumpedTwoTiles.jumped == true)) {
        switch (this.team) {
          case 'white': {
            this.potentialEnPassantMoves.push((Number(this.position) - 9).toString());
            //this.potentialMoves.push((Number(this.position) - 9).toString());
            break;
          }
          case 'black': {
            this.potentialEnPassantMoves.push((Number(this.position) + 7).toString());
            //this.potentialMoves.push((Number(this.position) + 7).toString());
            break;
          }
        }
      }
    } else {
      if (opponentsPawns.some(pawn => pawn.position == (Number(this.position) - 1).toString() && pawn.jumpedTwoTiles.jumped == true)) {
        switch (this.team) {
          case 'white': {
            this.potentialEnPassantMoves.push((Number(this.position) - 9).toString());
            //this.potentialMoves.push((Number(this.position) - 9).toString());
            break;
          }
          case 'black': {
            this.potentialEnPassantMoves.push((Number(this.position) + 7).toString());
            //this.potentialMoves.push((Number(this.position) + 7).toString());
            break;
          }
        }
      }
      if (opponentsPawns.some(pawn => pawn.position == (Number(this.position) + 1).toString() && pawn.jumpedTwoTiles.jumped == true)) {
        switch (this.team) {
          case 'white': {
            this.potentialEnPassantMoves.push((Number(this.position) - 7).toString());
            //this.potentialMoves.push((Number(this.position) - 7).toString());
            break;
          }
          case 'black': {
            this.potentialEnPassantMoves.push((Number(this.position) + 9).toString());
            //this.potentialMoves.push((Number(this.position) + 9).toString());
            break;
          }
        }
      }
    }
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
        this.potentialTwoTilesJumpMoves.push(newPotentialPosition2);
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
        this.potentialTwoTilesJumpMoves.push(newPotentialPosition2);
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
    this.potentialPawnAttacks = potentialAttacks;
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
