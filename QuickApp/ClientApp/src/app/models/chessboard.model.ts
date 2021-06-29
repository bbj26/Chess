import { ChessPiece } from '../models/chess-piece.model'

export class Chessboard {
  constructor() {
    this.verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
    this.horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
    this.chessboardMarks = new Array();
    this.tileNumbers = new Array();
    this.tileColors = new Array();
  }

  public tileColors: string[];
  public tileNumbers: number[];
  public chessboardMarks: string[];
  public verticalAxis: string[];
  public horizontalAxis: string[];
  public piecesArray: ChessPiece[];
  
  markBoard = () => {
    let counter = 0;
    for (let j = this.verticalAxis.length - 1; j >= 0; j--) {
      for (let i = 0; i <= this.horizontalAxis.length - 1; i++) {
        this.chessboardMarks.push(this.horizontalAxis[i] + this.verticalAxis[j]);
        this.tileNumbers.push(counter++);
        if ((i + j) % 2 == 0) {
          this.tileColors.push("black");
        } else {
          this.tileColors.push("white");
        }
      }
    }
  }

  createPieces() {
    this.piecesArray = [];
    this.piecesArray.push(new ChessPiece('1', 'pijun', 1, 'black', true, '6', [], false, true, false, null));
    this.piecesArray.push(new ChessPiece('2', 'pijun', 1, 'black', true, '7', [], false, true, false, null));
    this.piecesArray.push(new ChessPiece('2', 'pijun', 1, 'black', true, '8', [], false, true, false, null));
  }

}




/*
  - Ploča je numerirala svako polje --> DONE
  - Ploča mora imati importan model Piece --> DONE
  - Ploča mora imati funckiju za napraviti novi piece i dati mu piece.startingPosition --> DONE, func createPieces
  - Ploča mora proslijediti polju piece.Starting postion --> @input() --> DONE
  - Polje mora proslijediti Piecu svoj polje.tileNumber -> @Input --> DONE
  - Polje mora prikazati Piece ako je polje.tileNumber == piece.starting postion --> DONE

  - chessboard mora imati varijable startPoint i endPoint -> koordinate polja tipa broj tj. string u ovom slučaju. Inicijalno su te vrijednosti NULL.
    Klikom na polje, polje šalje chessboardu vrijednost figure koja se nalazi na njemu, u suprotnom šalje null. Polje provjerava ima li vrijednost !null u var startingPoint
      - ako nema, onda je ovaj klik oznacio startingPoint
      - ako ima, znaci da startingPoint postoji pa je ovaj klik potencijalni endPoint
      - provjerava se je li taj potez legalan
        - ako je, figura se pomiče sa starting na end point
        - ako nije, potez se odbacuje i obe varijable se vracaju u NULL
*/


/*
  - chessboard mora imati uvid u svako polje i koja se figura nalazi na pojedinom polju kao i detalje o svakoj pojedinoj figuri
*/
