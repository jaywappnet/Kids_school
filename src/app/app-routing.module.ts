import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutComponent },
    { path: 'photo_gallery', component: PhotoGalleryComponent },
    { path: 'student', component: StudentComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
