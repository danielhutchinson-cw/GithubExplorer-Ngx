import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../shared/services/github/github.service';
import { User } from '../../shared/types/user.type';

@Component({
    selector: 'profile-page',
    templateUrl: 'profile-page.component.html',
    styleUrls: ['profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
    public user: User;

    private _githubService: GithubService;

    constructor(githubService: GithubService) {
        this._githubService = githubService;
    }

    public ngOnInit(): void {
        this._githubService.getUserWithRepositories('thelastborker')
            .subscribe((user: User) => {
                this.user = user;
            });
    }
}