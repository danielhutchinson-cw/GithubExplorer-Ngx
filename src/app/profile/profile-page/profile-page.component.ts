import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/types/user.type';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'profile-page',
    templateUrl: 'profile-page.component.html',
    styleUrls: ['profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
    public user: User;

    private _activatedRoute: ActivatedRoute;

    constructor(activatedRoute: ActivatedRoute) {
        this._activatedRoute = activatedRoute;
    }

    public ngOnInit(): void {
        this._activatedRoute.params.subscribe(() => {
            this.user = this._activatedRoute.snapshot.data.user;
        });
    }
}