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
