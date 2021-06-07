import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chessboard-tile',
  templateUrl: './chessboard-tile.component.html',
  styleUrls: ['./chessboard-tile.component.scss']
})
export class ChessboardTileComponent implements OnInit {

  @Input() public tileMark = '';
  @Input() public tileColor = '';
  @Input() public tileNumber = '';

  tileFree: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }

  handleClick()  {
    console.log("clicked on tile number " + this.tileNumber);
  }

}
