import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContactUsService {

    constructor(private http: HttpClient) { }

    getContectBg() {
        return this.http.get(environment.baseURL + "contactbg/")
    }

    getInTouch() {
        return this.http.get(environment.baseURL + "gettouch/")
    }

    createQuery(paylod: any) {
        return this.http.post(environment.baseURL + "querie/", paylod)
    }

}
