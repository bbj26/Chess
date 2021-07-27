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
  public pieceImageUrl = "";
  public piece: ChessPiece;

  getCurrentPiece() {
    if (!this.chessPieces) return null;
    let currentPiece = null;
    this.chessPieces.forEach(piece => {
      if (this.occupiedTileNo == piece.position && piece.active == true) {
        currentPiece = piece;
        this.pieceImageUrl = currentPiece.imgUrl;
      }
    })
    if (currentPiece != null) {
      currentPiece.calculatePotentialMoves(this.chessPieces);
    }
    return currentPiece;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.piece = this.getCurrentPiece();
  }
    
}
