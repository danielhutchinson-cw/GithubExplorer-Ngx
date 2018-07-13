import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GithubApiService {
    private _httpClient: HttpClient;
    private GITHUB_API_URL = 'https://api.github.com';
    private AUTH_TOKEN = 'token efd469a0e9b97e7d57a5d263fdca8720e06dacf5';

    constructor(httpClient: HttpClient) {
        this._httpClient = httpClient;
    }

    public getUser(username: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.AUTH_TOKEN
            })
        };

        return this._httpClient.get(`${this.GITHUB_API_URL}/users/${username}`, httpOptions);
    }

    public getRepositoriesForUser(username: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.AUTH_TOKEN
            })
        };

        return this._httpClient.get(`${this.GITHUB_API_URL}/users/${username}/repos`, httpOptions);
    }
}