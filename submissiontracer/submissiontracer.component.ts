import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { element } from 'protractor';

@Component({
  selector: 'app-submissiontracer',
  templateUrl: './submissiontracer.component.html',
  styleUrls: ['./submissiontracer.component.css']
})
export class SubmissiontracerComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SubmissiontracerComponent>) { }
  onNoClick() {
    this.dialogRef.close();
}
  ngOnInit() {
  }

}
