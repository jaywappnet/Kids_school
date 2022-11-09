import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/shared/service/about.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    aboutOurWork: any;
    ourVision: any;
    aboutTeam: any;
    ourAchivment: any;

    constructor(private aboutservice: AboutService) { }

    ngOnInit(): void {

        this.aboutservice.getAboutWork().subscribe((data: any) => {
            this.aboutOurWork = data.data[0]
        })

        this.aboutservice.getVision().subscribe((data: any) => {
            this.ourVision = data.data[0]
        })

        this.aboutservice.getAboutTeam().subscribe((data: any) => {
            this.aboutTeam = data.data
        })

        this.aboutservice.getAchivement().subscribe((data: any) => {
            this.ourAchivment = data.data
        })
    }

    public slideConfig = {
        "slidesToShow": 4,
        "slidesToScroll": 4,
        "dots": true,
        "infinite": true,
        "autoplay": true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    };
}
