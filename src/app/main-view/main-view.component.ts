import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditCardComponent } from '../edit-card/edit-card.component';
import Swal from 'sweetalert2';
import { CdkDragDrop, DragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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
  isDeleted: boolean = false;

  toDoList: string[] = ['Washe the dishes', 'Clean your room', 'Make biscuts', 'Study for the test']
  doingList: string[] = ['Update my resume', 'Report the excel ', 'Submit the excel']
  doneList: string[] = ['Learn Angular',
    'Create a repository on GitHub, so I can disclose my programming skills online',
    'Clean my VSCode cache',
    'Fix "that" bug',
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
      this.deleteConfirmation(index, this.toDoList);
    }
  }

  deleteDoingList(index: number) {
    if (index >= 0 && index < this.doingList.length) {
      this.deleteConfirmation(index, this.doingList);
    }
  }

  deleteDoneList(index: number) {
    if (index >= 0 && index < this.doneList.length) {
      this.deleteConfirmation(index, this.doneList);
    }
  }

  deleteConfirmation(index: number, list: string[]) {
    let descrip = list[index];
    this.showAlertAreYouSure(descrip, index, list);
  }
  deleteFinalConfirmation(index: number, list: string[]) {
    var cardList = list;
    cardList.splice(index, 1)
  }

  editToDo(index: number) {
    let cardKanbam = this.toDoList[index];

    const dialogRef = this.dialog.open(EditCardComponent, {
      width: '400px', maxWidth: '400px',
      height: 'auto', maxHeight: '550px',
      data: { card: cardKanbam, title: "To Do" },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.length > 0){
        this.toDoList[index] = result;
      }
    });
  }

  editDoingList(index: number) {
    let cardKanbam = this.doingList[index];

    const dialogRef = this.dialog.open(EditCardComponent, {
      width: '400px', maxWidth: '400px',
      height: 'auto', maxHeight: '550px',
      data: { card: cardKanbam, title: "Doing" },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.length > 0){
        this.doingList[index] = result;
      }
    });
  }

  editDoneList(index: number) {
    let cardKanbam = this.doneList[index];

    const dialogRef = this.dialog.open(EditCardComponent, {
      width: '400px', maxWidth: '400px',
      height: 'auto', maxHeight: '550px',
      data: { card: cardKanbam, title: "Done" },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.length > 0){
        this.doneList[index] = result;
      }
    });
  }

  showAlertAreYouSure(description: string, index: number, list: string[]) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete ${description}?`,
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: 'Sure thing!',
      background: '#f4f4f4',
      backdrop: true,
      confirmButtonColor: '#fab700',
      showClass: {
        popup: '',
      },
      hideClass: {
        popup: '',
      }
    }).then((result) => {

      if (result.isConfirmed) {
        this.isDeleted = true;
        if (this.isDeleted == true) {
          this.deleteFinalConfirmation(index, list)
          Swal.fire({
            title: "Deleted!",
            text: "Your card has been deleted.",
            icon: "success",
            confirmButtonColor: '#fab700',
          });
        }
      }
      else {
        this.isDeleted = false;
      }
    });
  }
  drop(event: CdkDragDrop<string[]>, list: string[]) {
    if (event.previousContainer === event.container) {
    moveItemInArray(list, event.previousIndex, event.currentIndex);
    }else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
