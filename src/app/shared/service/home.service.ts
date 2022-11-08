import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private http: HttpClient) { }

    get_Banner() {
        return this.http.get(environment.baseURL + "banner_img/");
    }

    get_WCU() {
        return this.http.get(environment.baseURL + "wcu/");
    }

    get_Course() {
        return this.http.get(environment.baseURL + "course/");
    }

    get_Activity() {
        return this.http.get(environment.baseURL + "activity/");
    }

    get_Parent() {
        return this.http.get(environment.baseURL + "parent/");
    }
}
