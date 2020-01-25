import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { SService } from '../s.service';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { OpenrequirementsComponent } from '../openrequirements/openrequirements.component';
import { SubmissiontracerComponent } from '../submissiontracer/submissiontracer.component';
import { UserDetailsService } from '../Services/user-details.service';

export interface PeriodicElement {
    TrakerId: number;
    Date: string;
    JobId: number;
    JobTitle: string;
    Resume: string;
    ClientSubmission: string;
    InterviewSchedule: string;
    Remarks: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { TrakerId: 1, Date: '12-12-2019', JobId: 1, JobTitle: 'Python Developer', Resume: '1', ClientSubmission: 'Yes', InterviewSchedule: 'Yes', Remarks: 'Under Process' }
]

@Component({
    selector: 'app-submissiontracker',
    templateUrl: './submissiontracker.component.html',
    styleUrls: ['./submissiontracker.component.css']
})
export class SubmissiontrackerComponent implements OnInit {

    v: object[] = [];
    display: 'none';
    tru: boolean = false;
    ceo: boolean;
    bdm: boolean;
    brd: boolean = true;

    displayedColumns: string[] = ['TrakerId', 'Date', 'JobId', 'JobTitle', 'Resume', 'ClientSubmission', 'InterviewSchedule', 'Remarks', 'edit'];

    dataSource = new MatTableDataSource(ELEMENT_DATA);
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(
        private router: Router, private ds: SService,
        private dialog: MatDialog, private userDetials: UserDetailsService) { }
    applyFilter(filtervalue: string) {
        this.dataSource.filter = filtervalue.trim().toLowerCase();
    }
    profile: string;
    result: any;
    ngOnInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.profile = this.ds.receivingdata()
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        // if (this.ds.receivingdata() == "ceo") {
        //   this.ceo = false;
        //   this.brd = true;
        //   this.bdm = false;
        // }
        // else if (this.ds.receivingdata() == "brd") {
        //   this.ceo = false;
        //   this.brd = true;
        //   this.bdm = false;
        // }
        // else if (this.ds.receivingdata() == "bdm") {
        //   this.ceo = false;
        //   this.brd = false;
        //   this.bdm = true;
        // }

        if (this.userDetials.getUserType() != "brd") this.brd = false;

    }

    openDialog(elementData) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '800px';
        dialogConfig.height = '600px';

        dialogConfig.autoFocus = true;

        dialogConfig.data = {
            row: elementData
        };

        this.dialog.open(SubmissiontracerComponent, dialogConfig)
    }

}