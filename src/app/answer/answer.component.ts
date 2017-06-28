import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
<<<<<<< HEAD

export class AnswerComponent implements OnInit {


@Input() answers: string;

  constructor() { }



  ngOnInit() {
  
=======
export class AnswerComponent implements OnInit {

  @Input() answers: string;

  constructor() { }

  ngOnInit() {
>>>>>>> 72d346287a849cf5dc512a9251ed1bed533140aa
  }

}
