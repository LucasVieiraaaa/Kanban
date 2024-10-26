import { Component, inject, model, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {

  readonly dialogRef = inject(MatDialogRef<EditCardComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  title: string = '';
  message: string = "";

  constructor() { }

  ngOnInit() {
    console.log(this.data)
    this.getDescription();
    this.message = "You are editing: " + this.data.card;
  }

  getDescription() : string{
    this.title = this.data.title
    return this.title
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
