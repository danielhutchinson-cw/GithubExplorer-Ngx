import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GithubApiService {
    private _httpClient: HttpClient;
    private GITHUB_API_URL = 'https://api.github.com';

    constructor(httpClient: HttpClient) {
        this._httpClient = httpClient;
    }

    public getUser(username: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'token e57cd2245a3c6aa2dcf40403696c524e65a3140e'
            })
        };

        return this._httpClient.get(`${this.GITHUB_API_URL}/users/${username}`, httpOptions);
    }

    public getRepositoriesForUser(username: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'token e57cd2245a3c6aa2dcf40403696c524e65a3140e'
            })
        };

        return this._httpClient.get(`${this.GITHUB_API_URL}/users/${username}/repos`, httpOptions);
    }
}