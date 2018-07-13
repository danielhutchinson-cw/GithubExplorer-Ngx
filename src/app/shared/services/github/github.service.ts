import { Injectable } from '@angular/core';
import { GithubApiService } from './github.api.service';
import { User } from '../../types/user.type';
import { flatMap, map } from 'rxjs/operators';
import { UserMapper } from '../../mappers/user.mapper';
import { Observable } from 'rxjs';
import { Repository } from '../../types/repository.type';
import { RepositoryMapper } from '../../mappers/repository.mapper';

@Injectable()
export class GithubService {
    private _githubApi: GithubApiService;

    constructor(githubApi: GithubApiService) {
        this._githubApi = githubApi;
    }

    public getUser(username: string): Observable<User> {
        return this._githubApi.getUser(username)
            .pipe(map(UserMapper.mapUser));
    }

    public getRepositoriesForUser(username: string): Observable<Array<Repository>> {
        return this._githubApi.getRepositoriesForUser(username)
            .pipe(map((repoResponse: any) => repoResponse.map(RepositoryMapper.mapRepository)));
    }

    public getUserWithRepositories(username: string): Observable<User> {
        return this.getUser(username)
            .pipe(
                flatMap((user: User) => {
                    return this.getRepositoriesForUser(user.username)
                        .pipe(map((repos) => {
                            user.repositories = repos.map(RepositoryMapper.mapRepository);
                            return user;
                        }));
                })
            );
    }
}