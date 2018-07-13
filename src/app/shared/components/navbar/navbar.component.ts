import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
    public userSearch: string;

    private _router: Router;

    constructor(router: Router) {
        this._router = router;
    }

    public search(): void {
        this._router.navigate(['', this.userSearch]);
    }
}