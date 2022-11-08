import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StudentsService {

    constructor(private http: HttpClient) { }

    getStudentBgImg() {
        return this.http.get(environment.baseURL + "studentbg/1")
    }

    getStudentDetail() {
        return this.http.get(environment.baseURL + "describe/")
    }

    getKeyHighlights() {
        return this.http.get(environment.baseURL + "pgcurriculum/")
    }

    getPlayGroup() {
        return this.http.get(environment.baseURL + "pgactivities/")
    }

    getSyllebus() {
        return this.http.get(environment.baseURL + "syllabus/")
    }
}
