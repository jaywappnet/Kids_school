import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/shared/service/students.service';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

    studentBgImg: any;
    studentDetail: any;
    keyHighlightsPg: any;
    playGroupActivity: any;
    syllebus: any;
    studentDetails: any;

    playGroundData: any;
    nurseryData: any;
    juniorKGData: any;
    seniorKGData: any;

    constructor(private studentservice: StudentsService) { }

    ngOnInit(): void {


        this.studentservice.getKeyHighlights().subscribe((data: any) => {
            let res = data.data[0].key_highlights;
            this.keyHighlightsPg = res.split(";");
        });

        this.studentservice.getPlayGroup().subscribe((data: any) => {
            let res = data.data[0].activities;
            this.playGroupActivity = res.split(";");
        });

        this.studentservice.getSyllebus().subscribe((data: any) => {
            this.syllebus = data.data;
        });

        this.studentservice.getStudentDetail().subscribe((data: any) => {
            this.playGroundData = data.data[0];
            this.nurseryData = data.data[1];
            this.juniorKGData = data.data[2];
            this.seniorKGData = data.data[3];
        });
    }
}
