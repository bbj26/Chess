import { Component, OnInit, Input } from '@angular/core';
import { ChessPiece } from '../../models/chess-piece.model';

@Component({
  selector: 'app-chess-piece',
  templateUrl: './chess-piece.component.html',
  styleUrls: ['./chess-piece.component.scss']
})
export class ChessPieceComponent implements OnInit {

  @Input() occupiedTileNo = '';
  @Input() chessPieces: ChessPiece[];

  getCurrentPiece() {
    if (!this.chessPieces) return null;
    var currentPiece = null;
    this.chessPieces.forEach(piece => {
      if (this.occupiedTileNo == piece.position && piece.active == true) {
        currentPiece = piece;
      }
    })
    return currentPiece;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.piece = new ChessPiece();
    this.piece.active = true;
    this.piece.underAttack = false;
    this.piece.touched = false;
    this.piece.imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png'
  }

  handleClick() {
    console.log("piece clicked");
  }
  
  public piece: ChessPiece;
  
}
