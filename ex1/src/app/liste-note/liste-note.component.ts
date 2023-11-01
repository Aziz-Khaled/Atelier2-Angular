import { ListeServiceService } from './../liste-service.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-liste-note',
  templateUrl : "./liste-note.component.html",
  styles: [
  ]
})
export class ListeNoteComponent {
  constructor(private listeS: ListeServiceService){}
   

  
}
