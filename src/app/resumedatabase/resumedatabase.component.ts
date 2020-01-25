import { Component, OnInit, ViewChild } from '@angular/core';
import { getMaxListeners } from 'cluster';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { SService } from '../s.service';
import { UploadresumeComponent } from '../uploadresume/uploadresume.component';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsService } from '../Services/user-details.service';

export interface PeriodicElement {
    name: string;
    email: string
    phonenumber: string;
    technology: string;
    visastatus: string;
    avilabilitystatus: string;
    experience: string;
    asignTo: string
}
const ELEMENT_DATA: PeriodicElement[] = [{ name: 'kishore', email: "kanumola@gmail.com", phonenumber: "9886535456", technology: "php", visastatus: "h1b active", avilabilitystatus: "yes", experience: "1 year", asignTo: "kishore" }]

@Component({
    selector: 'app-resumedatabase',
    templateUrl: './resumedatabase.component.html',
    styleUrls: ['./resumedatabase.component.css']
})
export class ResumedatabaseComponent implements OnInit {

    dataSource = new MatTableDataSource(ELEMENT_DATA);
    displayedColumns: string[] = ['name', 'email', 'phonenumber', 'technology', 'visastatus', 'avilabilitystatus', 'asignTo', 'edit'];

    brd: boolean = true;
    user: any;

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    applyFilter(search: string) {
        this.dataSource.filter = search.trim().toLowerCase();
    }

    constructor(private router: Router, private ds: SService, public dialog: MatDialog, private userDetials: UserDetailsService) { }

    ngOnInit() {
        this.user = this.userDetials.getUserDetails();
        if (this.user.type != "brd") this.brd = false;
    }

    openDialog(DialogData): void {
        const dialogRef = this.dialog.open(UploadresumeComponent, {
            width: '800px',
            data: {
                message: DialogData
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The Upload Resume dialog was closed');
        });
    }

}
