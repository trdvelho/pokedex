import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonsService } from 'src/app/pokemons.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  pokeList: [];
  displayedColumns = ['name', 'geracao', 'tipos', 'ataques', 'acao'];
  constructor(private pokemonCtrl: PokemonsService,
              private route: Router) {

    this.pokemonCtrl.getPokemons().subscribe(result => {
      console.log('pokemons ', result);

      this.pokeList = result.filter(val => {
        if (val.Name !== undefined) {
          return val;
        }
      });
    });
  }
  private detailPokemon(element, index) {

    this.route.navigate(['/detalhes'],
      {queryParams: {pokemon : JSON.stringify(element)}});
  }
}
