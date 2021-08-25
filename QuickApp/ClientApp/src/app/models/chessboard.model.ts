import { ActivationEnd } from '@angular/router';
import { ChessPiece } from '../models/chess-piece.model';
import { Pawn } from '../models/pawn.model';
import { Rook } from '../models/rook.model';
import { Bishop } from './bishop.model';
import { Queen } from '../models/queen.model';
import { Knight } from '../models/knight.model';
import { King } from '../models/king.model';

export class Chessboard {
  constructor() {
    this.verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
    this.horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
    this.chessboardMarks = new Array();
    this.tileNumbers = new Array();
    this.tileColors = new Array();
    this.promotion = {
      active: false,
      team: '',
      tileNumber: '',
      pawnIndex: 0,
      chessBot: false
    };
    this.kingChecked = {
      check: false,
      attackedKing: new ChessPiece,
      attacker: new ChessPiece()
    };
    this.checkmate = false;
    this.stalemate = false;

  }

  public chessBotColour: string = '';
  public whitesTurn: boolean = true;
  public gameOver: boolean = false;
  public winner: string;
  public roundNo: number;
  public tileColors: string[];
  public tileNumbers: number[];
  public chessboardMarks: string[];
  public verticalAxis: string[];
  public horizontalAxis: string[];
  public piecesArray: ChessPiece[];
  public inactivePiecesArray: ChessPiece[];
  public promotion: {
    active: boolean,
    team: string,
    tileNumber: string
    pawnIndex: number,
    chessBot: boolean
  };
  public kingChecked: {
    check: boolean,
    attackedKing: ChessPiece,
    attacker: ChessPiece
  };
  public checkmate: boolean;
  public stalemate: boolean;

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
    this.inactivePiecesArray = [];
    this.piecesArray = [];
    let pawnWhite1: ChessPiece = new Pawn('44', 'pawn', 1, 'white', true, '48', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');
    let pawnWhite2: ChessPiece = new Pawn('45', 'pawn', 1, 'white', true, '49', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');
    let pawnWhite3: ChessPiece = new Pawn('46', 'pawn', 1, 'white', true, '50', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');
    let pawnWhite4: ChessPiece = new Pawn('47', 'pawn', 1, 'white', true, '51', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');
    let pawnWhite5: ChessPiece = new Pawn('48', 'pawn', 1, 'white', true, '52', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');
    let pawnWhite6: ChessPiece = new Pawn('49', 'pawn', 1, 'white', true, '53', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');
    let pawnWhite7: ChessPiece = new Pawn('50', 'pawn', 1, 'white', true, '54', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');
    let pawnWhite8: ChessPiece = new Pawn('51', 'pawn', 1, 'white', true, '55', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');

    let pawnBlack1: ChessPiece = new Pawn('52', 'pawn', 1, 'black', true, '8', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');
    let pawnBlack2: ChessPiece = new Pawn('53', 'pawn', 1, 'black', true, '9', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');
    let pawnBlack3: ChessPiece = new Pawn('54', 'pawn', 1, 'black', true, '10', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');
    let pawnBlack4: ChessPiece = new Pawn('55', 'pawn', 1, 'black', true, '11', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');
    let pawnBlack5: ChessPiece = new Pawn('56', 'pawn', 1, 'black', true, '12', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');
    let pawnBlack6: ChessPiece = new Pawn('57', 'pawn', 1, 'black', true, '13', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');
    let pawnBlack7: ChessPiece = new Pawn('58', 'pawn', 1, 'black', true, '14', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');
    let pawnBlack8: ChessPiece = new Pawn('59', 'pawn', 1, 'black', true, '15', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');

    let rookWhite1: ChessPiece = new Rook('40', 'rook', 5, 'white', true, '56', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png');
    let rookWhite2: ChessPiece = new Rook('41', 'rook', 5, 'white', true, '63', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png');
    let rookBlack1: ChessPiece = new Rook('42', 'rook', 5, 'black', true, '0', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png');
    let rookBlack2: ChessPiece = new Rook('43', 'rook', 5, 'black', true, '7', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png');

    let bishopWhite1: ChessPiece = new Bishop('60', 'bishop', 3, 'white', true, '58', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png');
    let bishopWhite2: ChessPiece = new Bishop('61', 'bishop', 3, 'white', true, '61', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png');
    let bishopBlack1: ChessPiece = new Bishop('62', 'bishop', 3, 'black', true, '2', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png');
    let bishopBlack2: ChessPiece = new Bishop('63', 'bishop', 3, 'black', true, '5', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png');

    let queenWhite: ChessPiece = new Queen('70', 'queen', 9, 'white', true, '59', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png');
    let queenBlack: ChessPiece = new Queen('71', 'queen', 9, 'black', true, '3', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png');

    let knightWhite1: ChessPiece = new Knight('81', 'knight', 3, 'white', true, '57', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png');
    let knightWhite2: ChessPiece = new Knight('82', 'knight', 3, 'white', true, '62', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png');
    let knightBlack1: ChessPiece = new Knight('83', 'knight', 3, 'black', true, '1', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png');
    let knightBlack2: ChessPiece = new Knight('84', 'knight', 3, 'black', true, '6', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png');

    let kingWhite: ChessPiece = new King('90', 'king', 100, 'white', true, '60', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png');
    let kingBlack: ChessPiece = new King('91', 'king', 100, 'black', true, '4', [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png');


    this.piecesArray.push(pawnWhite1, pawnWhite2, pawnWhite3, pawnWhite4, pawnWhite5, pawnWhite6, pawnWhite7, pawnWhite8,
      pawnBlack1, pawnBlack2, pawnBlack3, pawnBlack4, pawnBlack5, pawnBlack6, pawnBlack7, pawnBlack8,
      rookWhite1, rookWhite2, rookBlack1, rookBlack2,
      bishopWhite1, bishopWhite2, bishopBlack1, bishopBlack2,
      queenWhite, queenBlack,
      knightWhite1, knightWhite2, knightBlack1, knightBlack2,
      kingWhite, kingBlack);
    //console.log(this.piecesArray);
    //console.log(pawnWhite);

    this.roundNo = 0;
  }

  incrementRoundNumber() {
    this.roundNo = this.roundNo + 1;
  };

  getRoundNumber() {
    return this.roundNo;
  }

  checkIfPawnJumpedTwoTiles(piece: ChessPiece, newPosition: string) {
    if (piece.name == 'pawn' && piece.touched == false && piece.potentialTwoTilesJumpMoves.some(move => move == newPosition)) {
      piece.jumpedTwoTiles.jumped = true;
      piece.jumpedTwoTiles.roundNo = this.roundNo;
    }
  }

  //Legal moves are contained in potentialMoves array of each piece
  isLegalMove(chessPiece: ChessPiece, newPosition: string) {
    let activePiece = this.piecesArray.find(piece => piece.id == chessPiece.id);
    let result = activePiece.potentialMoves.some(move => move == newPosition);
    return result;
  }

  canAttackPiece(attacker: ChessPiece, defender: ChessPiece) {
    // can not eat King
    if (attacker.active && defender.active && (attacker.team != defender.team) && this.isLegalMove(attacker, defender.position) &&
      this.promotion.active == false && ((this.whitesTurn && attacker.team == 'white') || (!this.whitesTurn && attacker.team == 'black'))) {
      if (attacker.name == 'pawn') {
        let pawn = new Pawn();
        pawn = Object.assign(pawn, attacker);
        if (pawn.potentialPawnAttacks.some(position => position == defender.position)) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }

  //makes move to an empty tile if the move follows game rules
  movePiece(pieceId: string, newPosition: string) {
    if (!this.gameOver) {
      let piece = this.piecesArray.find(piece => piece.id == pieceId);
      if (this.whitesTurn && piece.team == 'white') {
        if (this.promotion.active == false) {
          this.enPassantAttack(piece.id, newPosition);

          if (this.isLegalMove(piece, newPosition)) {
            piece.position = newPosition;

            this.incrementRoundNumber();
            this.checkIfPawnJumpedTwoTiles(piece, newPosition);
            piece.touched = true;
            this.whitesTurn = false;
          }
          this.checkGameOver();
        }
        if (!this.gameOver) {
          this.pawnPromotion(piece.id, newPosition);
          this.checkIfKingIsChecked(this.piecesArray);
        }
      } else if (!this.whitesTurn && piece.team == 'black') {
        if (this.promotion.active == false) {
          this.enPassantAttack(piece.id, newPosition);

          if (this.isLegalMove(piece, newPosition)) {
            piece.position = newPosition;
            this.incrementRoundNumber();
            this.checkIfPawnJumpedTwoTiles(piece, newPosition);
            piece.touched = true;
            this.whitesTurn = true;
          }
          this.checkGameOver();
        }
        if (!this.gameOver) {
          this.pawnPromotion(piece.id, newPosition);
          this.checkIfKingIsChecked(this.piecesArray);
        }
      }

    }
  }

  attackPiece(attackingPieceId: string, attackedPieceId: string) {
    var attackingPiece: ChessPiece = this.piecesArray.find(piece => piece.id == attackingPieceId);
    var attackedPiece: ChessPiece = this.piecesArray.find(piece => piece.id == attackedPieceId);


    //Check if attacking piece can attack attacked piece and proceed with attack if true
    if (this.canAttackPiece(attackingPiece, attackedPiece)) {
      let index = 0;
      this.piecesArray.forEach(piece => {
        index = index + 1;
        if (piece.id == attackedPieceId && piece.id != attackingPiece.id) {
          //remove attacked piece from pieces array and push it to inactive pieces
          attackedPiece.active = false;
          if (attackedPiece.name != 'king') {
            this.piecesArray.splice(index - 1, 1);
            this.inactivePiecesArray.push(piece);
          }
        }
      });
      //this.inactivePiecesArray.push(attackedPiece);

      this.movePiece(attackingPieceId, attackedPiece.position);
      //console.log("Successfully eat " + attackedPiece.id);
    }
  }

  //checks if move is EnPassant attack and proceeds with it if true
  enPassantAttack(pieceId: string, newPosition: string) {
    let attacker = this.piecesArray.find(piece => piece.id == pieceId);
    if (attacker.name == "pawn" && ((attacker.team == 'white' && this.whitesTurn) || (attacker.team == 'black' && !this.whitesTurn))) {
      let pawnAttacker = new Pawn();
      Object.assign(pawnAttacker, attacker);
      if (pawnAttacker.potentialEnPassantMoves.some(move => move == newPosition) == true) {
        if (attacker.team == "white") {
          let attackedPosition = (Number(newPosition) + 8).toString();
          let attackedPawnIndex = this.piecesArray.findIndex(piece => piece.position == attackedPosition);
          let attackedPawn = this.piecesArray.find(piece => piece.position == attackedPosition);
          if (attackedPawn.jumpedTwoTiles.roundNo == this.roundNo) {
            this.piecesArray.splice(attackedPawnIndex, 1);
            attackedPawn.active = false;
            attacker.potentialMoves.push(newPosition);
          }
        }
        else {
          let attackedPosition = (Number(newPosition) - 8).toString();
          let attackedPawnIndex = this.piecesArray.findIndex(piece => piece.position == attackedPosition);
          let attackedPawn = this.piecesArray.find(piece => piece.position == attackedPosition);
          if (attackedPawn.jumpedTwoTiles.roundNo == this.roundNo) {
            this.piecesArray.splice(attackedPawnIndex, 1);
            attackedPawn.active = false;
            attacker.potentialMoves.push(newPosition);
          }
        }
      };
    }
  }


  pawnPromotion(pieceId: string, newPostion: string) {
    let piece = this.piecesArray.find(piece => piece.id == pieceId);
    if (piece != undefined && piece.name == "pawn") {
      if (piece.team == "white" && piece.checkPositionTopBorder() == true) {
        let pawnIndex = this.piecesArray.findIndex(_piece => _piece.id == piece.id);

        this.promotion.active = true;
        this.promotion.tileNumber = newPostion;
        this.promotion.team = 'white';
        this.promotion.pawnIndex = pawnIndex;

        if (this.chessBotColour != '') {
          this.promotion.chessBot = true;
          let queenWhite: ChessPiece = new Queen('789', 'queen', 9, 'white', true, this.promotion.tileNumber, [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png');
          this.piecesArray.splice(this.promotion.pawnIndex, 1, queenWhite);
          this.promotion.active = false;
        }

      } else if (piece.team == 'black' && piece.checkPositionBottomBorder() == true) {
        let pawnIndex = this.piecesArray.findIndex(_piece => _piece.id == piece.id);

        this.promotion.active = true;
        this.promotion.tileNumber = newPostion;
        this.promotion.team = 'black';
        this.promotion.pawnIndex = pawnIndex;

        if (this.chessBotColour != '') {
          this.promotion.chessBot = true;
          let queenBlack: ChessPiece = new Queen('888', 'queen', 9, 'black', true, this.promotion.tileNumber, [], false, true, false, 'https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png');
          this.piecesArray.splice(this.promotion.pawnIndex, 1, queenBlack);
          this.promotion.active = false;
        }
      }
    }
  }

  checkIfKingIsChecked(piecesArray: ChessPiece[]) {
    let whiteKing: ChessPiece = new ChessPiece();
    whiteKing = piecesArray.find(piece => piece.team == "white" && piece.name == "king");
    let blackKing: ChessPiece = new ChessPiece();
    blackKing = piecesArray.find(piece => piece.team == "black" && piece.name == "king");

    piecesArray.forEach(piece => piece.calculatePotentialMoves(piecesArray));

    if (piecesArray.some(piece => piece.team == whiteKing.team && piece.potentialMoves.some(move => move == blackKing.position) == true)) {
      let attacker: ChessPiece = piecesArray.find(piece => piece.team == whiteKing.team && piece.potentialMoves.some(move => move == blackKing.position) == true);
      this.kingChecked.check = true;
      this.kingChecked.attackedKing = blackKing;
      this.kingChecked.attacker = attacker;
      blackKing.underAttack = true;
      return true;
    } else if (piecesArray.some(piece => piece.team == blackKing.team && piece.potentialMoves.some(move => move == whiteKing.position) == true)) {
      let attacker: ChessPiece = piecesArray.find(piece => piece.team == blackKing.team && piece.potentialMoves.some(move => move == whiteKing.position) == true);
      this.kingChecked.check = true;
      this.kingChecked.attackedKing = whiteKing;
      this.kingChecked.attacker = attacker;
      whiteKing.underAttack = true;
      return true;
    } else {
      this.kingChecked.check = false;
      blackKing.underAttack = false;
      whiteKing.underAttack = false;
      return false;
    }
  }

  checkGameOver() {
    let whiteKing = this.piecesArray.find(piece => piece.name == 'king' && piece.team == 'white');
    let blackKing = this.piecesArray.find(piece => piece.name == 'king' && piece.team == 'black');

    if (whiteKing.active == false) {
      console.log('game over :) checkmate! Black is winner!');
      this.gameOver = true;
      this.winner = 'black';
    } else if (blackKing.active == false) {
      console.log('game over :) checkmate! White is winner!');
      this.gameOver = true;
      this.winner = 'white';
    } else if (whiteKing.underAttack == false && this.piecesArray.filter(piece => piece.team == whiteKing.team).every(piece => piece.potentialMoves == [])) {
      console.log('game over :( stalemate! The game is draw');
      this.gameOver = true;
    } else if (blackKing.underAttack == false && this.piecesArray.filter(piece => piece.team == blackKing.team).every(piece => piece.potentialMoves == [])) {
      console.log('game over :( stalemate! The game is draw');
      this.gameOver = true;
    }
    this.chessBotMakeMove(this.piecesArray);
  }

  chessBotMakeMove(piecesArray: ChessPiece[]) {
    if ((!this.whitesTurn && this.chessBotColour == 'black') || (this.whitesTurn && this.chessBotColour == 'white')) {
      let chessBotTeam = piecesArray.filter(piece => piece.team == this.chessBotColour);
      let opponentTeam = piecesArray.filter(piece => piece.team != this.chessBotColour);
      let opponentsPositions = opponentTeam.map(piece => piece.position);

      let chessBotPotentialMoves = [];
      chessBotTeam.forEach(piece => {
        if (piece.potentialMoves.length != 0) {
          let obj = {
            pieceId: piece.id,
            piecePosition: piece.position,
            potentialMoves: piece.potentialMoves
          };
          chessBotPotentialMoves.push(obj);
        }
      });

      let positionsToAttack = [];
      chessBotPotentialMoves.forEach(obj => {
        obj.potentialMoves.forEach(move => {
          opponentsPositions.forEach(position => {
            if (move == position) {
              let attacker = this.piecesArray.find(piece => piece.id == obj.pieceId);
              let defender = this.piecesArray.find(piece => piece.position == position);
              if (this.canAttackPiece(attacker, defender)) {
                let attackingData = {
                  pieceId: obj.pieceId,
                  piecePosition: obj.piecePosition,
                  positionToAttack: position
                }
                positionsToAttack.push(attackingData);
              }
            }
          })
        });
      })

      //make attack if it is possible
      if (positionsToAttack.length > 0) {
        let randomPieceToAttackWith = positionsToAttack[(Math.floor(Math.random() * positionsToAttack.length))];
        let pieceToAttack = opponentTeam.find(piece => piece.position == randomPieceToAttackWith.positionToAttack);
        let attacker = this.piecesArray.find(piece => piece.id == randomPieceToAttackWith.pieceId);
        if (this.canAttackPiece(attacker, pieceToAttack)) {
          setTimeout(() => {
            this.attackPiece(attacker.id, pieceToAttack.id); 
          }, 2000);
        }
      } else if (chessBotPotentialMoves.length > 0) {
        //make random legal move
        let randomPiece = chessBotPotentialMoves[(Math.floor(Math.random() * chessBotPotentialMoves.length))];
        let randomPosition = randomPiece.potentialMoves[(Math.floor(Math.random() * randomPiece.potentialMoves.length))];
        let pieceToMove = this.piecesArray.find(piece => piece.id == randomPiece.pieceId);
        if (this.isLegalMove(pieceToMove, randomPosition)) {
          setTimeout(() => {
            this.movePiece(pieceToMove.id, randomPosition);
          }, 2000);
        }
      }
    }
  }

  startChessBot() {
    if (this.chessBotColour == 'white') {
      setTimeout(() => {
        this.chessBotMakeMove(this.piecesArray);
      }, 5000);
    }

  }


}




