<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { JeopardyService } from './jeopardy.service'



=======
import { Component, OnInit} from '@angular/core';

import { JeopardyService } from './jeopardy.service'
>>>>>>> 72d346287a849cf5dc512a9251ed1bed533140aa

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD


export class AppComponent implements OnInit {
  title = 'Jeopardy Lite';

  questions;
  score = 0;
  errorMessage: string; 
=======
export class AppComponent implements OnInit {
  title = 'Jeopardy Lite';

  questions: any;
  score = 0;
  errorMessage: string;
>>>>>>> 72d346287a849cf5dc512a9251ed1bed533140aa
  successMessage: string;
  enterAnswer: string;
  answers: string;

<<<<<<< HEAD
 
  constructor(private JeopardyService: JeopardyService) {}

getQuestions(){
    this.JeopardyService.getRecords("questions")
      .subscribe(  
        questions => 
        {this.questions = questions[0]
        console.log(this.questions.answer);
         console.log(this.questions);},
        error => 
        {this.errorMessage = <any>error
         console.log(this.errorMessage);
        }
      )
=======

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

>>>>>>> 72d346287a849cf5dc512a9251ed1bed533140aa
}

  onClick(){
    console.log(this.enterAnswer);
    if(this.enterAnswer == this.questions.answer){
      console.log("true");
      this.score = this.score += this.questions.value;
     // this.getQuestions();
    //  this.enterAnswer= " ";
    this.answers = "You're right!";
      
    }else{
      console.log("false");
       this.answers="Sorry, the answer is: " + this.questions.answer;
      
    }
    this.getQuestions();
    this.enterAnswer= " ";
   

  }



  ngOnInit (){ 
  this.getQuestions();
 }
}