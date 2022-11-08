import { Component, OnInit } from '@angular/core';
import { PhotoGalleryService } from 'src/app/shared/service/photo-gallery.service';

@Component({
    selector: 'app-photo-gallery',
    templateUrl: './photo-gallery.component.html',
    styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {

    eventImageData: any;
    celebrationImageData: any;
    achievementData: any;

    constructor(private eventImageService: PhotoGalleryService) {
    }

    ngOnInit(): void {

        let query = '';

        this.eventImageService.getEventImage(query).subscribe((data: any) => {
            this.eventImageData = data.data;
        })

        this.eventImageService.getCelebrationImage(query).subscribe((data: any) => {
            this.celebrationImageData = data.data;
        })

        this.eventImageService.getAchievementImage(query).subscribe((data: any) => {
            this.achievementData = data.data;
        })
    }

    eventImages(param: any) {
        this.eventImageService.getEventImage(param).subscribe((data: any) => {
            this.eventImageData = data.data;
        })
    }

    celebrationImage(param: any) {
        this.eventImageService.getCelebrationImage(param).subscribe((data: any) => {
            this.celebrationImageData = data.data;
        })
    }

    achievementImage(param: any) {
        this.eventImageService.getAchievementImage(param).subscribe((data: any) => {
            this.achievementData = data.data;
        })
    }
}
