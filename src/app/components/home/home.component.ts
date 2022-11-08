import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/service/home.service';
import activityIcon from '../../../constant.json';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    colors = ['#cc42e1', '#5b9ec0', '#46b741', '#cc42e1', '#5b9ec0', '#46b741'];

    bannerImg: any;
    wcuData: any;
    courseData: any;
    activityData: any;
    parentData: any;

    constructor(private homeservice: HomeService) { }

    ngOnInit(): void {
        this.homeservice.get_Banner().subscribe((data: any) => {
            this.bannerImg = data.data;
        })

        this.homeservice.get_WCU().subscribe((data: any) => {
            this.wcuData = data.data;
        })

        this.homeservice.get_Course().subscribe((data: any) => {
            this.courseData = data.data[0];
        })

        this.homeservice.get_Parent().subscribe((data: any) => {
            this.parentData = data.data;
        })

        this.getActivityData();
    }

    getColor(i: any) {
        return this.colors[i]
    }

    getActivityData() {
        this.homeservice.get_Activity().subscribe((data: any) => {
            this.activityData = data.data;
        })
    }

    get_image(item_name: string) {
        if (typeof item_name === typeof []) {
            let path = activityIcon.activity_icon.filter((item: any) => {
                if (item.title === item_name[0]) {
                    return item;
                }
            });

            if (path.length > 0) return path[0].image;
            return '';
        }

        var path = activityIcon.activity_icon.filter((item: any) => {
            if (item.title === item_name) {
                return item;
            }
        });

        if (path.length > 0) return path[0].image; {
            return '';
        }
    }

    //kids_activitis slider
    public slideConfig = {
        "slidesToShow": 3,
        "slidesToScroll": 3,
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

    // parents_testimonials slider
    public slideConfig_Parents_Testimonials = {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "dots": false,
        "infinite": true,
        "autoplay": true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
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
