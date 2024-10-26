import { Component, inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { EditCardComponent } from '../edit-card/edit-card.component';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})

export class MainViewComponent implements OnInit {
  readonly dialog = inject(MatDialog);

  toDo: string = "To Do";
  doing: string = "Doing";
  done: string = "Done";
  addCard: string = "Add Card";

  toDoList: string[] = ['Washe the dishes', 'Clean your room', 'Make biscuts', 'Study for the test']
  doingList: string[] = ['Update my resume', 'Report the excel ', 'Submit the excel']
  doneList: string[] = ['Learn Angular',
    'Create a repository on GitHub, so I can disclose my programming skills online',
    'Clean my VSCode cache',
    'Fix \t"that" bug',
    'Study about French language, and have a conversation'
  ]

  constructor() { }

  ngOnInit() {
  }

  addtoDo() {
    let x = "New Card here"
    this.toDoList.push(x);
  }

  addDoingList() {
    let x = "New Card here"
    this.doingList.push(x);
  }

  addDoneList() {
    let x = "New Card here"
    this.doneList.push(x);
  }

  deleteToDo(index: number) {
    if (index >= 0 && index < this.toDoList.length) {
      this.toDoList.splice(index, 1);
    }
  }

  deleteDoingList(index: number) {
    if (index >= 0 && index < this.doingList.length) {
      this.doingList.splice(index, 1);
    }
  }

  deleteDoneList(index: number) {
    if (index >= 0 && index < this.doneList.length) {
      this.doneList.splice(index, 1);
    }
  }

  editToDo(index: number){
    let cardKanbam =this.toDoList[index];

    const dialogRef = this.dialog.open(EditCardComponent, {
      width: '400px',maxWidth: '400px',
      height: 'auto', maxHeight: '500px',
      data: {card: cardKanbam, title: "To Do"},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  editDoingList(index: number){
    let cardKanbam =this.doingList[index];

    const dialogRef = this.dialog.open(EditCardComponent, {
      width: '400px',maxWidth: '400px',
      height: 'auto', maxHeight: '500px',
      data: {card: cardKanbam, title: "Doing"},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  editDoneList(index: number){
    let cardKanbam =this.doneList[index];

    const dialogRef = this.dialog.open(EditCardComponent, {
      width: '400px',maxWidth: '400px',
      height: 'auto', maxHeight: '500px',
      data: {card: cardKanbam, title: "Done"},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
