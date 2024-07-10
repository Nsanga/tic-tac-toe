import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private board: string[][];
  private currentPlayer: string;
  private scores: { X: number, O: number };

  constructor() {
    // Initialize scores
    this.scores = { X: 0, O: 0 };
    // Temporarily initialize properties
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    // Call resetBoard to properly initialize the game
    this.resetBoard();
  }

  // Method to reset the game board and current player
  resetBoard() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
  }

  // Method to get the current game board
  getBoard() {
    return this.board;
  }

  // Method to get the current player
  getCurrentPlayer() {
    return this.currentPlayer;
  }

  // Method to make a move
  makeMove(row: number, col: number): boolean {
    if (this.board[row][col] === '') {
      this.board[row][col] = this.currentPlayer;
      return true;
    }
    return false;
  }

  // Method to switch the current player
  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  // Method to check for a winner
  checkWinner(): string | null {
    // Check rows, columns, and diagonals
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]) {
        return this.board[i][0];
      }
      if (this.board[0][i] && this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i]) {
        return this.board[0][i];
      }
    }
    if (this.board[0][0] && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
      return this.board[0][0];
    }
    if (this.board[0][2] && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
      return this.board[0][2];
    }
    return null;
  }

  // Method to update scores
  updateScores(winner: string) {
    if (winner in this.scores) {
      this.scores[winner as 'X' | 'O']++;
    }
  }

  // Method to get scores
  getScores() {
    return this.scores;
  }
}
