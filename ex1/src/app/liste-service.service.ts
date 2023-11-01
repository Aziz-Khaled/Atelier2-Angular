import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
@Injectable({
  providedIn: 'root'
})
export class ListeServiceService {
  note : string = "" ;
  color : string ; 
  Notes : string[] = [] ;
  Colors : string[] = [] ;

  addNote (n :string ){
    this.Notes.push(n) ;
}
  getNotes() : string[] {
  return JSON.parse(JSON.stringify(this.Notes));
  
}


deleteAll (){
  this.Notes.splice(0,this.Notes.length) ;
}
popeee(){
  this.Notes.pop();
}

editcolor(){
  length=6;
  let chars='0123456789ABCDEF';
  let hex = "#"
  while(length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}

  constructor() {
    
  }
}
