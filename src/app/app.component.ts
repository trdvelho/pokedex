import { Component } from '@angular/core';
import { PokemonsService } from './pokemons.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UnitTest';
  pokeList: any;
  displayedColumns = ['name', 'geracao', 'tipos', 'ataques', 'acao'];
  constructor(private pokemonCtrl: PokemonsService) {
    this.pokemonCtrl.getPokemons().subscribe(result => {
      this.pokeList = result.filter(val => {
        if (val.Name !== undefined) {
          return val;
        }
      });
    });
  }

  private over(event, row) {
    console.log('over', row);
  }
}
