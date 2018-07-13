import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GithubApiService {
    private _httpClient: HttpClient;
    private GITHUB_API_URL = 'https://api.github.com';

    constructor(httpClient: HttpClient) {
        this._httpClient = httpClient;
    }

    public getUser(username: string): Observable<any> {
        return this._httpClient.get(`${this.GITHUB_API_URL}/users/${username}`);
    }

    public getRepositoriesForUser(username: string): Observable<any> {
        return this._httpClient.get(`${this.GITHUB_API_URL}/users/${username}/repos`);
    }
}