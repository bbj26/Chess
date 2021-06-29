import { Component, OnInit, Input } from '@angular/core';
import { ChessPiece } from '../../../../models/chess-piece.model'

@Component({
  selector: 'app-chessboard-tile',
  templateUrl: './chessboard-tile.component.html',
  styleUrls: ['./chessboard-tile.component.scss']
})
export class ChessboardTileComponent implements OnInit {

  @Input() public tileMark = '';
  @Input() public tileColor = '';
  @Input() public tileNumber = '';
  @Input() public chessPieces: ChessPiece[];

  public occupiedByPiece: ChessPiece = new ChessPiece();
  
  
 
  constructor() { }

  ngOnInit(): void {
  }

  public getPieceOnThisTile() {
    if (!this.chessPieces) return null;
    var currentPiece = null;
    this.chessPieces.forEach(piece => {
      if (this.tileNumber == piece.position) {
        currentPiece = piece;
      }
    })
    return currentPiece ? currentPiece : null;
  }

  public assignPieceData(pieceObject: ChessPiece) {
    this.occupiedByPiece = Object.assign(this.occupiedByPiece, pieceObject);
  }

  public handleClick() {
    if (this.getPieceOnThisTile()) {
      this.assignPieceData(this.getPieceOnThisTile());
      console.log(this.occupiedByPiece)
    }
    else {
      console.log("empty tile " + this.tileNumber)
    }
      
  }

}

