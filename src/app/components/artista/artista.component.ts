import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {

   artist:any=[];
   loading:boolean;
   topTracks:any[]=[];

  constructor(private _activatedRoute:ActivatedRoute,
                      private spotify:SpotifyService) {
    this._activatedRoute.params.subscribe(params=>{
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
       

    })

   }

   getArtista(id:any){
     this.loading=true;
    this.spotify.getArtista(id).subscribe(artista =>{ 
      console.log(artista);
      this.artist = artista;
      this.loading=false;
      })
   };

   getTopTracks(id:any){
     this.spotify.getTopTracks(id).subscribe(topTracks =>{
       console.log(topTracks);
       this.topTracks = topTracks;
     })
   }


 



}
