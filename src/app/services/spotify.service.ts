import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  console.log('Spotify Service listo!');

   }


   getQuery(query:string){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCon5ZUjA-_n5YXLBbcu3n3ug8YIOIzC1n5ISHKGssl0XUqwjkpti8B1u7-rg26MUhL0ek2tkM_SvwyHFY'
    });

    return this.http.get(url,{headers})
  

   }

   getNewRelases(){

    return this.getQuery('browse/new-releases?=')
              .pipe(map(data=> data['albums'].items));
    
   }

getArtistas(termino:string){

  return this.getQuery(`search?q=${termino}&type=artist&limit=12`)
            .pipe(map(data=> data['artists'].items));
  
 }


 getArtista(id:string){

  return this.getQuery(`artists/${id}`);
            // .pipe(map(data=> data['artists'].items));
  
 }
 
 getTopTracks(id:string){

  return this.getQuery(`artists/${id}/top-tracks?country=ar`)
            .pipe(map(data => data['tracks']));
  
 }
 
}

