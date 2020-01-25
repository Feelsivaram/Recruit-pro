import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
    selector: 'app-submissiontracer',
    templateUrl: './submissiontracer.component.html',
    styleUrls: ['./submissiontracer.component.css']
})
export class SubmissiontracerComponent implements OnInit {

    trackerid: string;
    clientsubmission: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

    ngOnInit() {
        if (this.data.row) {
            this.trackerid = this.data.row.TrakerId
        }
    }

}