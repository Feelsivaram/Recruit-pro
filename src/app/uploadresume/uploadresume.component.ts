import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { element } from 'protractor';
@Component({
  selector: 'app-uploadresume',
  templateUrl: './uploadresume.component.html',
  styleUrls: ['./uploadresume.component.css']
})
export class UploadresumeComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<UploadresumeComponent>,
    @Inject(MAT_DIALOG_DATA)public data) { }
  
  onNoClick() {
    this.dialogRef.close();
}
   
  ngOnInit() {
  }

}
