import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StudentComponent } from './components/student/student.component';
import { BlogComponent } from './components/blog/blog.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        StudentComponent,
        BlogComponent,
        PhotoGalleryComponent,
        ContactUsComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SlickCarouselModule,
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule,
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule { }
