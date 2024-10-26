import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  toDo: string = "To Do";
  doing: string = "Doing";
  done: string = "Done";
  addCard: string = "Add Card";

  toDoList: string[] = ['Washe the dishes', 'Clean your room', 'Make biscuts', 'Study for the test']
  doingList: string[] = ['Update my resume', 'Report the excel ','Submit the excel']
  doneList: string[] = ['Learn Angular',
     'Create a repository on GitHub, so I can disclose my programming skills online',
     'Clean my VSCode cache',
     'Fix \t"that" bug',
     'Study about French language, and have a conversation'
    ]


  constructor() { }

  ngOnInit() {
  }

  addtoDo(){
    let x = "New Card here, you can edit it"
    this.toDoList.push(x);
  }
  
  addDoingList(){
    let x = "New Card here, you can edit it"
    this.doingList.push(x);
  }

  addDoneList(){
    let x = "New Card here, you can edit it"
    this.doneList.push(x);
  }

}
