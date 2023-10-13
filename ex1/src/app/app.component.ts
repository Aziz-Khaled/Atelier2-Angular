import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
selector: 'app-root',
template: `

<h1>exercice 1 : </h1>
<span>
<input type ="text" [(ngModel)]="note" />
<button (click)="addNote()">addNote</button>
<button (click) = "deleteAll()">delete all</button>
<button (click)="simpleAlert()">addNote</button>


</span>

<ul>
<li [ngStyle]="{'color': editcolor()}"
*ngFor = "let n of Notes"> {{ n }}   <button (click)="popeee()">X</button></li>
</ul>
` ,
styles: []
})


export class AppComponent {
title = 'welcome to app!';
note : string = "" ;
color : string ; 
Notes : string[] = [] ;
Colors : string[] = [] ;

addNote (){
    this.Notes.push(this.note) ;
    console.log (this.note) ; 
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


///////////////////////////

ngOnInit(){

    console.log('This is init method');

  }

  

  simpleAlert(){

    Swal.fire('Hello world!');

  }

  

  alertWithSuccess(){

    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')

  }

  

  confirmBox(){

    Swal.fire({

      title: 'Are you sure want to remove?',

      text: 'You will not be able to recover this file!',

      icon: 'warning',

      showCancelButton: true,

      confirmButtonText: 'Yes, delete it!',

      cancelButtonText: 'No, keep it'

    }).then((result) => {

      if (result.value) {

        Swal.fire(

          'Deleted!',

          'Your imaginary file has been deleted.',

          'success'

        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {

        Swal.fire(

          'Cancelled',

          'Your imaginary file is safe :)',

          'error'

        )

      }

    })

  }


}
