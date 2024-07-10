import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.css',
})
export class ScoreComponent implements OnInit {
  scores: { X: number; O: number };

  constructor(private gameService: GameService, private router: Router) {
    this.scores = { X: 0, O: 0 };
  }

  ngOnInit(): void {
    this.scores = this.gameService.getScores();
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
