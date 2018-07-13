import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from '../types/user.type';
import { Observable } from 'rxjs';
import { GithubService } from '../services/github/github.service';

@Injectable()
export class UserProfileResolver implements Resolve<User> {
    private _githubService: GithubService;

    constructor(githubService: GithubService) {
        this._githubService = githubService;
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        return this._githubService.getUserWithRepositories(route.params.username);
    }
}
