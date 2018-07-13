import { Component } from '@angular/core';
import { User } from '../../shared/types/user.type';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'profile-page',
    templateUrl: 'profile-page.component.html',
    styleUrls: ['profile-page.component.scss'],
})
export class ProfilePageComponent {
    public user: User;


    constructor(activatedRoute: ActivatedRoute) {
        this.user = activatedRoute.snapshot.data.user;
    }
}