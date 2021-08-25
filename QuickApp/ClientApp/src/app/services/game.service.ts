import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player.model'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'https://localhost:44350/api/PlayerDetails';

  player1: Player = new Player();
  player2: Player = new Player();


  getPlayers() {
    return this.http.get(this.baseUrl);
  }

  getPlayer(playerId: number) {
    return this.http.get(this.baseUrl + '/' + playerId);
  }

  createPlayer(playerObj: Player) {
    return this.http.post(this.baseUrl, playerObj);
  }

  viewPlayer(playerId: string) {
    return this.http.get(this.baseUrl + '/' + playerId);
  }

  updatePlayer(playerId: number, playerObj: Player) {
    return this.http.put(this.baseUrl + '/' + playerId, playerObj);
  }
}
