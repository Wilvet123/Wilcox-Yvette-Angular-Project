import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICustomer } from '../interfaces/customer';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrl: './customer-dialog.component.css' // Corrected to 'styleUrls'
})
export class CustomerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CustomerDialogComponent>, // Dialog reference to close
    @Inject(MAT_DIALOG_DATA) public data: ICustomer  // Injecting the ICustomer data
  ) {}

  // Method to close the dialog
  onNoClick(): void {
    this.dialogRef.close();
  }
}