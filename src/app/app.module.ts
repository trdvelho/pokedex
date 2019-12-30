import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonsService } from './pokemons.service';
import { PokemonDetalheComponent } from './components/pokemon-detalhe/pokemon-detalhe.component';
import { HomeComponent } from './components/home/home.component';
import { FilterPokemonPipe } from './filter-pokemon.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PokemonDetalheComponent,
    HomeComponent,
    FilterPokemonPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatCardModule
  ],
  providers: [PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
