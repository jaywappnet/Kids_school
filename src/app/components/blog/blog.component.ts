import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/service/blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    bannerImage: any;
    typeOfClass: any;

    constructor(private blogservice: BlogService) { }

    ngOnInit(): void {
        this.blogservice.getBannerImage().subscribe((data: any) => {
            this.bannerImage = data.data;
        })

        this.blogservice.getTypeOfClass().subscribe((data: any) => {
            this.typeOfClass = data.data

        })
    }

}
