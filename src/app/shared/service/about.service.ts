import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AboutService {

    constructor(private http: HttpClient) { }

    getAboutWork() {
        return this.http.get(environment.baseURL + "about_work/")
    }

    getVision() {
        return this.http.get(environment.baseURL + "vision/")
    }

    getAboutTeam() {
        return this.http.get(environment.baseURL + "team/")
    }

    getAchivement() {
        return this.http.get(environment.baseURL + "archivement/")
    }
}
