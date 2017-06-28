import { Component, OnInit} from '@angular/core';

import { JeopardyService } from './jeopardy.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeopardy Lite';

  questions: any;
  score = 0;
  errorMessage: string;
  successMessage: string;
  enterAnswer: string;
  answers: string;


  constructor(private JeopardyService: JeopardyService){}

  getQuestions(){
    this.JeopardyService.getRecords("question")
      .subscribe(
          questions => {
            this.questions = questions[0] 
          console.log(this.questions);
          console.log(this.questions.answer);
        },
        error => {
          this.errorMessage = <any>error; 
          console.log(this.errorMessage)
        }
      );
        
  }

  onClick() {
    console.log(this.enterAnswer);
    if (this.enterAnswer == this.questions.answer){
        console.log("true");
        // console.log(this.questions.value);
        // console.log(this.score)
        this.score = this.score += this.questions.value;
        this.answers = "You're right!";
      } else {
       console.log("false");
       this.answers="Sorry, the answer is: " + this.questions.answer;
       
      }
      this.getQuestions();
      this.enterAnswer= " ";
  }


  



  ngOnInit() {

    this.getQuestions();
   
  }

}

  