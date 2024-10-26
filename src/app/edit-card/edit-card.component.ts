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
  description: string = '';
  message: string = "";

  textareaValue: string = '';

  constructor() { }

  ngOnInit() {
    this.getDescription();
    this.textareaValue = this.getCardDescription();
    this.message = "You are editing: " + this.data.card;
  }

  getCardDescription(): string {
    this.description = this.data.card
    return this.description
  }

  getDescription(): string {
    this.title = this.data.title
    return this.title
  }

  closeDialog() {
    this.dialogRef.close(this.textareaValue);
  }

  changeValueFromCard() {
    this.dialogRef.close(this.textareaValue);
  }
}
