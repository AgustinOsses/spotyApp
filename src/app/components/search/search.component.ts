import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
 loadingSearch:boolean;

  constructor( private spotify:SpotifyService) { }

  artistas: any[]=[];
  error:boolean=false;
  mostrarTarjeta:boolean;

  
 

  buscar(termino:string){

  this.loadingSearch = true;
  console.log(termino)
  this.spotify.getArtistas(termino).subscribe(data=>{
      console.log(data)
      this.mostrarTarjeta=true;
      this.artistas = data;
      this.loadingSearch = false;
  });
  
  if(termino.length ==0){
    this.loadingSearch = false; 
  }

  }

}
