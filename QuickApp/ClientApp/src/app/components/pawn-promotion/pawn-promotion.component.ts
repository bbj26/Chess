import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pawn-promotion',
  templateUrl: './pawn-promotion.component.html',
  styleUrls: ['./pawn-promotion.component.scss']
})
export class PawnPromotionComponent implements OnInit {

  @Input() promotionInfo: {
    active: boolean,
    team: string,
    tileNumber: string,
    pawnIndex: number
  }

  @Output() promotionEvent: EventEmitter<any> = new EventEmitter<any>();

  pickPromotionPiece($event) {
    //console.log("clicked on " + $event.target.id);
    let promotionData = $event.target.id
    this.promotionEvent.emit(promotionData);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
