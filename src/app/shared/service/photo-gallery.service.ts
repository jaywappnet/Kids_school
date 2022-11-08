import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { query } from '@angular/animations';


@Injectable({
    providedIn: 'root'
})
export class PhotoGalleryService {

    constructor(private http: HttpClient) { }

    getBgPhoto() {
        return this.http.get(environment.baseURL + "photo/")
    }

    getEventImage(query?: any) {
        let params: any
        query.length ? params = new HttpParams().set('type', query) : params;
        return this.http.get(environment.baseURL + "event/", { params: params });
    }

    getCelebrationImage(query?: any) {
        let params: any
        query.length ? params = new HttpParams().set('type', query) : params;
        return this.http.get(environment.baseURL + "celebration/", { params: params });
    }

    getAchievementImage(query?: any) {
        let params: any
        query.length ? params = new HttpParams().set('type', query) : params;
        return this.http.get(environment.baseURL + "achievement/", { params: params });
    }
}
