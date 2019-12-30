import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detalhe',
  templateUrl: './pokemon-detalhe.component.html',
  styleUrls: ['./pokemon-detalhe.component.scss']
})
export class PokemonDetalheComponent implements OnInit {
  pokemon: any;
  fastAttack: any;
  constructor(private route: ActivatedRoute) {
    this.route
        .queryParams
        .subscribe(params => {

          this.pokemon = JSON.parse(params.pokemon);
          this.fastAttack = JSON.parse(params.attacks);
            console.log('pokemon ', params);
        });

    // this.route.paramMap.subscribe( (res: any) => {
    //   this.pokemon = res.params;
    //   this.fastAttack = this.pokemon['Fast Attack(s)'];
    //   console.log('pokenon ', this.pokemon);
    // });


  }

  ngOnInit() {
  }

}
