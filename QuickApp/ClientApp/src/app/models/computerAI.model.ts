import { Player } from "./player.model";

export class ComputerAI extends Player {

    public playerId: number = 0;
    public playerName: string = 'Chess Bot';
    public matchesPlayed: number = 1;
    public wins: number = 0;
    public points: number = 0;
  }