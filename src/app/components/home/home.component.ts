import {Component, OnDestroy, OnInit} from '@angular/core';
import { Game } from 'src/app/models';
import {HttpService} from '../../services/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  sort!: string;
  games!: Game[];
  gameSub: Subscription | undefined;
  routeSub: Subscription | undefined;

  constructor(
    private httpService: HttpService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.routeSub = this.activateRoute.params.subscribe((params) => {
      if(params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    });
  }

  searchGames(sort: string, search?: string) {
    this.gameSub = this.httpService.getGameList(sort, search).subscribe((gameList) => {
      this.games = gameList.results
    });
  }

  openGameDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  ngOnDestroy() {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
