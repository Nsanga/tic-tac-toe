import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-home', // Defines the CSS selector for the component
  templateUrl: './home.component.html', // Specifies the HTML template for this component
  styleUrls: ['./home.component.css'] // Specifies the CSS file for this component
})
export class HomeComponent implements OnInit {
  board: string[][]; // Represents the game board as a 2D array
  currentPlayer: string; // Represents the current player

  constructor(
    private gameService: GameService, // Injects the GameService for game logic
    private router: Router) { // Injects the Router for navigation
    // Initialize properties
    this.board = [];
    this.currentPlayer = '';
  }

  ngOnInit(): void {
    // Initializes the game board and current player from the game service
    this.board = this.gameService.getBoard();
    this.currentPlayer = this.gameService.getCurrentPlayer();
  }

  makeMove(row: number, col: number) {
    // Handles the player's move
    if (this.gameService.makeMove(row, col)) {
      // If the move is valid
      const winner = this.gameService.checkWinner();
      if (winner) {
        // If there is a winner
        alert(`${winner} wins!`);
        this.gameService.updateScores(winner); // Updates the scores
        this.gameService.resetBoard(); // Resets the game board
        this.board = this.gameService.getBoard(); // Refreshes the board
      } else {
        // If there is no winner, switch the player
        this.gameService.switchPlayer();
        this.currentPlayer = this.gameService.getCurrentPlayer();
      }
    }
  }

  viewScores() {
    // Navigates to the scores page
    this.router.navigate(['/score']);
  }
}
