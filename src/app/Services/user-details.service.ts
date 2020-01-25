import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserDetailsService {

    private Userdetials = {
        emailId: '',
        type: '',
        phone: '',
        image: ''
    }

    setUserImage(value: any) {
        this.Userdetials.image = value;
    }

    setUserDetails(value: any) {
        this.Userdetials = value;
    }

    getUserType() {
        return this.Userdetials.type;
    }

    getUserDetails() {
        return this.Userdetials;
    }

}
