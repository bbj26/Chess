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
