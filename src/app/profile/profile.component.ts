import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SService } from '../s.service';
import { UserDetailsService } from '../Services/user-details.service';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    a: string;
    profile: string;
    user: any;

    updateUserForm: any;

    constructor(private router: Router, private ds: SService, private userDetails: UserDetailsService, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.profile = this.ds.receivingdata()
        this.profile = this.ds.receivingdata()

        this.user = this.userDetails.getUserDetails();
        this.updateUserForm = this.formBuilder.group({
            password: '',
            email: this.user.emailId,
            phone: this.user.phone
        });
    }

    gettingdata(a) {
        this.a = a;
    }

    getProfileImage(event) {
        const ImageFile = event.target.files;
        if (ImageFile.length > 0) {
            for (let i = 0; i < ImageFile.length; i++) {
                const reader = new FileReader();
                reader.onload = (filedata) => {
                    // console.log('Image', reader.result)
                    this.userDetails.setUserImage(reader.result);
                }
                reader.readAsDataURL(ImageFile[i])
            }
        }
    }

    onSubmit(event) {
        console.log(event);
    }

}
