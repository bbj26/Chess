import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent implements OnInit {

  constructor() { }

  public tileColors = new Array();
  public chessboardMarks = new Array();
  verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
  horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
  
  markBoard = () => {
    for (let j = this.verticalAxis.length - 1; j >= 0; j--) {
      for (let i = 0; i <= this.horizontalAxis.length - 1; i++) {
        this.chessboardMarks.push(this.horizontalAxis[i] + this.verticalAxis[j]);
        if ((i + j) % 2 == 0) {
          this.tileColors.push("black");
        } else {
          this.tileColors.push("white");
        }
      }
    }
  }

  ngOnInit(): void {
    this.markBoard();
  }

}
