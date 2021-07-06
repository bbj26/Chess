import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
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
  @Output() tileEvent: EventEmitter<any> = new EventEmitter<any>();
 
  constructor() { }

  ngOnInit(): void {
  }


  public occupiedByPiece: ChessPiece = new ChessPiece();

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

  //assign piece data to this.occupiedByPiece variable
  public assignPieceData(pieceObject: ChessPiece) {
    this.occupiedByPiece = Object.assign(this.occupiedByPiece, pieceObject);
  }


  //emits the clicked chess piece data and/or tile number to chessboard component
  public handleClick() {

    var dataToSendToChessboard = {
      chessPiece: this.occupiedByPiece,
      tileNumber: this.tileNumber
    }
    
    if (this.getPieceOnThisTile()) {
      this.assignPieceData(this.getPieceOnThisTile());
      this.tileEvent.emit(dataToSendToChessboard);
    }
    else {
      dataToSendToChessboard.chessPiece = null;
      this.tileEvent.emit(dataToSendToChessboard);
    }
  }


}

