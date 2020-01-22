import { Component, OnInit } from '@angular/core';
import{FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { element } from 'protractor';
@Component({
  selector: 'app-openrequirements',
  templateUrl: './openrequirements.component.html',
  styleUrls: ['./openrequirements.component.css']
})
export class OpenrequirementsComponent implements OnInit {
  
   
  constructor()   { }
     
  

  ngOnInit() {
  }
//   save() {
//     this.dialogRef.close(this.form.value);
// }

//  close() {
//      this.dialogRef.close();
//  }
closeModalDialog() {
  this.display = 'none'; //set none css after close dialog
}
display: 'none';
}

































