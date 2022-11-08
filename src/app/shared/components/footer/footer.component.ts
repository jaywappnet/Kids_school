import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FooterService } from '../../service/footer.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    AskForm!: FormGroup;
    submitted = false;

    constructor(private footerservice: FooterService, private fb: FormBuilder) { }

    ngOnInit(): void {
        this.AskForm = this.fb.group({
            user_name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone_no: ['', Validators.required],
            study_class: ['', [Validators.required]],
        });
    }

    get f() {
        return this.AskForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        if (this.AskForm.invalid) {
            return;
        }

        const payload = {
            user_name: this.AskForm.value.user_name,
            email: this.AskForm.value.email,
            phone_no: this.AskForm.value.phone_no,
            study_class: this.AskForm.value.study_class
        }
        this.footerservice.askAboutKids(payload).subscribe((data: any) => {
        })
    }
}
