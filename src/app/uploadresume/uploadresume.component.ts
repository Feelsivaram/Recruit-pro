import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { element } from 'protractor';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-uploadresume',
    templateUrl: './uploadresume.component.html',
    styleUrls: ['./uploadresume.component.css']
})

export class UploadresumeComponent implements OnInit {

    name: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, ) { }

    ngOnInit() {
        if (this.data.message) {
            this.name = this.data.message.name
        }
    }

}
