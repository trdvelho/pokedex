import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map} from 'rxjs/operators';
import { element } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  API_URL = 'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json';
  constructor(private http: HttpClient) {

   }

   getPokemons(): Observable<any> {
    return this.http.get(this.API_URL).
      pipe();
  }
}
