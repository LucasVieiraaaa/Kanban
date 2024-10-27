import { Component, inject, model, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

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
    if (this.textareaValue.length > 0) {
      this.dialogRef.close(this.textareaValue);
      this.showAlertOnSucess()
    }
    else {
      this.showAlertOnError()
    }
  }

  showAlertOnError() {
    Swal.fire({
      title: 'Ops...',
      text: 'The input you wrote is empty, please write the description',
      icon: 'error',
      confirmButtonText: 'Ok',
      background: '#f4f4f4', 
      backdrop: true,     
      confirmButtonColor: '#fab700',    
      showClass: {
        popup: '',
      },
      hideClass: {
        popup: '',
      }
    });
  } 

  showAlertOnSucess() {
    Swal.fire({
      title: 'Success',
      text: 'The card was changed successfully',
      icon: 'success',
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
    });
  } 
}
