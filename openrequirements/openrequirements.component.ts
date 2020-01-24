import { Component, OnInit,Inject } from '@angular/core';
import{FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { element } from 'protractor';
@Component({
  selector: 'app-openrequirements',
  templateUrl: './openrequirements.component.html',
  styleUrls: ['./openrequirements.component.css']
})
export class OpenrequirementsComponent implements OnInit {
  
   
 //,@Inject(MAT_DIALOG_DATA) public data: DialogData
  constructor(  private dialogRef: MatDialogRef<OpenrequirementsComponent>,
    @Inject(MAT_DIALOG_DATA)public data)   { }
     
  

  ngOnInit() {
  }
//   save() {
//     this.dialogRef.close(this.form.value);
// }

 onNoClick() {
     this.dialogRef.close();
 }
// closeModalDialog() {
//   this.display = 'none'; //set none css after close dialog
// }
// display: 'none';
 }

































