import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { SService } from '../s.service';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { OpenrequirementsComponent } from '../openrequirements/openrequirements.component';
import { validateBasis } from '@angular/flex-layout';
import { isFulfilled, longStackSupport } from 'q';
import { SrvRecord } from 'dns';
import { ScheduleinterviewComponent } from '../scheduleinterview/scheduleinterview.component';
import { ResumedatabaseComponent } from '../resumedatabase/resumedatabase.component';
import { ReportgenerationComponent } from '../reportgeneration/reportgeneration.component';
import { UserDetailsService } from '../Services/user-details.service';

export interface DialogData {
    JobId: number;
    JobTitle: string;
    Location: string;
    ClientName: string;
    VendorName: string;
    Rate: number;
    ContractType: string;
    VisaType: string;
    JobCreatedAt: string;
    assignajobtobrd: string;
    Status: string;
}

// const ELEMENT_DATA: DialogData[] = [{ client: 'dhivya', vendor: 'apparao', skills: 'java', rate: '500$', visatype: 'h1b', experience: '5years', location: 'newyork', assignajobtobrd: 'sam', numberofrequirements: '200', contracttype: 'tender' },
// { client: 'dhivya', vendor: 'apparao', skills: 'java', rate: '500$', visatype: 'h1b', experience: '5years', location: 'newyork', assignajobtobrd: 'sam', numberofrequirements: '200', contracttype: 'tender' },
// { client: 'sutulu', vendor: 'apparao', skills: '.net', rate: '500$', visatype: 'h1b', experience: '5years', location: 'newyork', assignajobtobrd: 'sam', numberofrequirements: '200', contracttype: 'tender' },
// { client: 'jailo', vendor: 'apparao', skills: 'angular', rate: '500$', visatype: 'h1b', experience: '5years', location: 'newyork', assignajobtobrd: 'sam', numberofrequirements: '200', contracttype: 'tender' },
// { client: 'lilly', vendor: 'apparao', skills: 'php', rate: '500$', visatype: 'h1b', experience: '5years', location: 'newyork', assignajobtobrd: 'sam', numberofrequirements: '200', contracttype: 'tender' },
// { client: 'morya', vendor: 'apparao', skills: 'mongodb', rate: '500$', visatype: 'h1b', experience: '5years', location: 'newyork', assignajobtobrd: 'sam', numberofrequirements: '200', contracttype: 'tender' },
// { client: 'kkoki', vendor: 'apparao', skills: 'java', rate: '500$', visatype: 'h1b', experience: '5years', location: 'newyork', assignajobtobrd: 'sam', numberofrequirements: '200', contracttype: 'tender' },
// { client: 'koti', vendor: 'apparao', skills: '.net', rate: '500$', visatype: 'h1b', experience: '5years', location: 'newyork', assignajobtobrd: 'sam', numberofrequirements: '200', contracttype: 'tender' },
// { client: 'jkjgj', vendor: 'apparao', skills: 'angular', rate: '500$', visatype: 'h1b', experience: '5years', location: 'newyork', assignajobtobrd: 'sam', numberofrequirements: '200', contracttype: 'tender' },
// { client: 'mnb', vendor: 'apparao', skills: 'php', rate: '500$', visatype: 'h1b', experience: '5years', location: 'newyork', assignajobtobrd: 'sam', numberofrequirements: '200', contracttype: 'tender' },
// { client: 'mnbc', vendor: 'apparao', skills: 'mongodb', rate: '500$', visatype: 'h1b', experience: '5years', location: 'newyork', assignajobtobrd: 'sam', numberofrequirements: '200', contracttype: 'tender' }
// ]

const ELEMENT_DATA: DialogData[] = [{ JobId: 1, JobTitle: 'Salesforce Developer', Location: 'Texas', ClientName: 'Name of the client', VendorName: 'Name of the vendor', Rate: 85, ContractType: 'C2C', VisaType: 'H1B', JobCreatedAt: '12-12-2019', assignajobtobrd: 'Vamsi', Status: 'Status' }
]

@Component({
    selector: 'app-addopenrequirements',
    templateUrl: './addopenrequirements.component.html',
    styleUrls: ['./addopenrequirements.component.css']
})
export class AddopenrequirementsComponent implements OnInit {
    v: object[] = [];
    show: true;
    display: 'none';
    tru: boolean = false;
    form: FormGroup;
    pages = [];

    displayedColumns: string[] = ['JobId', 'JobTitle', 'Location', 'ClientName', 'VendorName', 'Rate', 'VisaType', 'JobCreatedAt', 'assignajobtobrd', 'Status', 'edit'];

    user: any;

    dataSource = new MatTableDataSource(ELEMENT_DATA);
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    applyFilter(search: string) {
        this.dataSource.filter = search.trim().toLowerCase();
    }


    constructor(
        private router: Router, private ds: SService,
        private dialog: MatDialog,
        private userDetials: UserDetailsService) {

    }



    // private dialogRef: MatDialogRef<OpenrequirementsComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData
    result: any;
    profile: String;
    ngOnInit() {
        // this.getOpenReqs();
        this.profile = this.ds.receivingdata()
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        if (this.ds.receivingdata() == "ceo") {
            this.ceo = true;
            this.brd = false;
            this.bdm = false;
        }
        else if (this.ds.receivingdata() == "brd") {
            this.ceo = false;
            this.brd = true;
            this.bdm = false;
        }
        else if (this.ds.receivingdata() == "bdm") {
            this.ceo = false;
            this.brd = true;
            this.bdm = false;
        }
        var l: any = ELEMENT_DATA.length;
        //console.log(l);


        this.user = this.userDetials.getUserDetails();
        if (this.user.type != "brd") this.brd = false;
    }

    logout() {
        this.router.navigate(['/login'])
    }

    getFromTable() { }

    // postUserDetails(dataSource) {
    //   this.ds.openRequirements(dataSource, this.dataSource).subscribe(res => {
    //     this.result = res["message"]
    //   })

    // }

    // postRequire(data) {
    //   this.sService.postRequire(data).suscribe(
    //     res => {
    //       if (res.status == 200) {
    //         this.getOpenReqs();
    //       }
    //       else alert("error while adding requirement")
    //     },
    //     err => {

    //     }
    //   )
    // }


    // catchDetails(v)
    //   {
    //     this.v.push(v); 
    //   }

    //  save(v,i){
    //    console.log(v);
    //   this.v[i]={color:v};
    //  }


    ceo: boolean;
    bdm: boolean;
    brd: boolean;

    openDialog(DialogData): void {
        const dialogRef = this.dialog.open(OpenrequirementsComponent, {
            width: '800px',
            height: '550px',
            data: {
                JobData: DialogData
            }
        });


    }
}

  //   const dialogRef = this.dialogRef.open(AddopenrequirementsComponent, dialogRef) {
  //     width: '250px',
  //     data:elementData,
  //   }
  // }
  //   )}

  //   if(elementData) {
  //     console.log("User Data is: ", elementData)
  //   } else {

  //   }


