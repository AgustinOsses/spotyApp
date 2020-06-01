import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent  {

  nuevasCancianoes:any[]=[];
  loading:boolean;
  error: boolean = false;
  mensajeError:string;

  constructor( private spotify: SpotifyService ) {
    this.loading = true;

    this.spotify.getNewRelases()
        .subscribe(data=>{
        console.log(data);
          this.nuevasCancianoes = data;
          this.loading = false;
        },(errorServicio) =>{

          this.loading = false;
          this.error = true;
          this.mensajeError = errorServicio.error.error.message;
        });

   }



}
