import { Component, OnInit} from '@angular/core';

import { JeopardyService } from './jeopardy.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeopardy Lite';

  question: any;
  score: number = 0;
  enterAnswer: string;
  answer: string;


  constructor(private JeopardyService: JeopardyService){}

  getQuestion(){
    this.JeopardyService.getRecords("question")
      .subscribe(
          question => {
            this.question = question[0] 
          console.log(this.question);
          console.log(this.question.answer);
        }
      );
        
  }

  onClick() {
    console.log(this.enterAnswer);
    if (this.enterAnswer == this.question.answer){
        console.log("true");
        // console.log(this.question.value);
        // console.log(this.score)
        this.score += this.question.value;
        this.answer = "You are right!";
      } else {
       console.log("false");
       this.answer="Sorry, the answer is: " + this.question.answer;
       
      }
    this.getQuestion();
    this.enterAnswer= "";
  }


  ngOnInit() {

    this.getQuestion();
   
  }

}

  