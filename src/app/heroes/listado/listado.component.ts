import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent{
    heroes:string[] = ['WonderWoman','CatWoman','Wanda','SuperGirl','ElasticGirl'];
    heroeBorrado: string = '';

    borrarHeroe(){
      
      this.heroeBorrado = this.heroes.shift() || '';
     

    }

  

  }


