import { Component, OnInit,ViewChild } from '@angular/core';
import { getMaxListeners } from 'cluster';
import { MatSort, MatTableDataSource,MatDialog, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { SService } from '../s.service';
import { UploadresumeComponent } from '../uploadresume/uploadresume.component';
export interface PeriodicElement {
  name:string;
  email:string
  phonenumber:string;
  technology:string;
  visastatus:string;
  avilabilitystatus:string;
  experience:string;
  resume:string
}
const ELEMENT_DATA: PeriodicElement[] = [{name:'kishore',email:"kanumola@gmail.com",phonenumber:"9886535456",technology:"php",visastatus:"h1b active" ,avilabilitystatus:"greencard",experience:"1year",resume:"kishore"}]

@Component({
  selector: 'app-resumedatabase',
  templateUrl: './resumedatabase.component.html',
  styleUrls: ['./resumedatabase.component.css']
})
export class ResumedatabaseComponent implements OnInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ['name', 'email', 'phonenumber', 'technology', 'visastatus', 'avilabilitystatus', 'resume',   'edit'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  applyFilter(search: string) {
    this.dataSource.filter = search.trim().toLowerCase();
    
  }
  constructor(private router: Router, private ds: SService, 
    private dialog:MatDialog ) { }

  openDialog(DialogData):void {
    const dialogRef = this.dialog.open(UploadresumeComponent, {
      width: '800px',
      height:'550px',
      data:{
        message:'DialogData'
      }
        
    });
  }


   
  

  ngOnInit() {
  }

}
