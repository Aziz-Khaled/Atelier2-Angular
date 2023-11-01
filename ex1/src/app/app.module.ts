import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListeNoteComponent } from './liste-note/liste-note.component';
import { ListeServiceService } from './liste-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListeNoteComponent
    
  ],
  imports: [

    BrowserModule,FormsModule
  ],
  providers: [ListeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
