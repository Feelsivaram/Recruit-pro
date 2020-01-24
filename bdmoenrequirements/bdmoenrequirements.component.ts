import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { SService } from '../s.service';
import {MatDialog, MatDialogRef,MatDialogConfig} from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { OpenrequirementsComponent } from '../openrequirements/openrequirements.component';

export interface PeriodicElement {
  client:string;
  vendor:string;
  skills:string;
rate:string;
visatype:string;
experience:string;
location:string;
assignajobtobrd:string;
numberofrequirements:string;
contracttype:string;


}

const ELEMENT_DATA: PeriodicElement[] = [{client:'dhivya',vendor:'apparao',skills:'java',rate:'500$',visatype:'h1b',experience:'5years',location:'newyork',assignajobtobrd:'sam',numberofrequirements:'200',contracttype:'tender'}


]

@Component({
  selector: 'app-bdmoenrequirements',
  templateUrl: './bdmoenrequirements.component.html',
  styleUrls: ['./bdmoenrequirements.component.css']
})
export class BdmoenrequirementsComponent implements OnInit {
  v: object[] = [];
  display: 'none';
  tru: boolean = false;
  form:FormGroup;
  displayedColumns: string[] = ['client', 'vendor', 'skills', 'visatype', 'rate', 'experience', 'location', 'assignajobtobrd', 'numberofrequirements', 'contracttype',  'edit'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(private router: Router, private ds: SService, 
    private dialog:MatDialog) { }
  applyFilter(filtervalue: string) {
    this.dataSource.filter = filtervalue.trim().toLowerCase();
  }
  result: any; 
  

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openDialog(elementData) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width='400px';
     dialogConfig.height='300px';
          
    dialogConfig.autoFocus = true;

    this.dialog.open(OpenrequirementsComponent, dialogConfig)
     
    dialogConfig.data = {
      
        
  };

  this.dialog.open(OpenrequirementsComponent, dialogConfig);
}
}
  


