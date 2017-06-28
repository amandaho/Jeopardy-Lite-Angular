import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD
import { FormsModule }   from '@angular/forms';
=======
import { FormsModule } from '@angular/forms';

>>>>>>> 72d346287a849cf5dc512a9251ed1bed533140aa
import { AppComponent } from './app.component';
import { JeopardyService } from './jeopardy.service';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    JeopardyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
