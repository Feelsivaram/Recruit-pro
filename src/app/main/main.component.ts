import { Component, OnInit } from '@angular/core';
import { SService } from '../s.service';
import { Router } from '@angular/router';
import { UserDetailsService } from '../Services/user-details.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    constructor(private router: Router, private ds: SService, private userDetials: UserDetailsService) { }
    // ceo: boolean;
    brd: boolean = true;
    // bdm: boolean;
    // profile: string;
    user: any;

    logout() {
        this.router.navigate(['/login'])
    }

    ngOnInit() {
        this.user = this.userDetials.getUserDetails();
        if (this.user.type != "brd") this.brd = false;

        // this.profile = this.ds.receivingdata();
        // if (this.ds.receivingdata() == "ceo") {
        // this.ceo = true;
        //   this.brd = false;
        //   this.bdm = false;
        // }
        // else if (this.ds.receivingdata() == "brd") {
        // this.ceo = false;
        //   this.brd = false;
        //   this.bdm = true;
        // }
        // else if (this.ds.receivingdata() == "bdm") {
        // this.ceo = false;
        //   this.brd = true;
        //   this.bdm = false;
        // }
    }
}