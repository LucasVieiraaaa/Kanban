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

  constructor() { }

  ngOnInit() {
  }

}
