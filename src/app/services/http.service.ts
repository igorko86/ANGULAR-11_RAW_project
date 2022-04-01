import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {forkJoin, map, Observable} from 'rxjs';
import {environment as env} from '../../environments/environment';
import {APIResponse, Game, GameDetails} from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(ordering: string, search?: string): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);

    if(search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {params})
  }

  getGameDetails(id: string): Observable<Game> {
    const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);
    const gameTrailersRequest = this.http.get(
      `${env.BASE_URL}/games/${id}/movies`
    );
    const gameScreenshotsRequest = this.http.get(
      `${env.BASE_URL}/games/${id}/screenshots`
    );

    return forkJoin([
      gameInfoRequest,
      gameScreenshotsRequest,
      gameTrailersRequest
      ]).pipe(
      map(([gameInfoRequest,
             gameScreenshotsRequest,
             gameTrailersRequest]: any) => {
        return {
          ...gameInfoRequest,
          screenshots: gameScreenshotsRequest?.results,
          trailers: gameTrailersRequest?.results,
        };
      })
    );
  }
}
