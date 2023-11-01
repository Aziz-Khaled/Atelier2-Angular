import { Component,inject } from '@angular/core';
import { OnInit } from '@angular/core';
import Swal from 'sweetalert2';
//import {inject } from '@angular/core';
import { ListeServiceService } from './liste-service.service';


@Component({
selector: 'app-root',
templateUrl : "./app.component.html",
styles: []
})


export class AppComponent {
title = 'welcome to app!';
note : string = "" ;
color : string ; 
Notes : string[] = [] ;
Colors : string[] = [] ;
test : boolean = false ;

constructor(private listService: ListeServiceService){}

addNote (){
    this.listService.addNote(this.note) ;
}
affiche(){
  this.Notes = this.listService.getNotes();
  this.test = !this.test 

}
deleteAll (){
    this.listService.deleteAll() ;
}
popeee(){
    this.listService.popeee();
}

editcolor(){
    length=6;
    let chars='0123456789ABCDEF';
    let hex = "#"
    while(length--) hex += chars[(Math.random() * 16) | 0];
    return hex;
}
}
