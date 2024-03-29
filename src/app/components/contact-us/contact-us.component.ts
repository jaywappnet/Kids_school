import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/shared/service/contact-us.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

    contectBg: any;
    getinTouch: any;
    queriesForm!: FormGroup;
    submitted = false;

    constructor(private contactus: ContactUsService, private fb: FormBuilder) { }

    ngOnInit(): void {
        this.contactus.getContectBg().subscribe((data: any) => {
            this.contectBg = data.data;
        })

        this.contactus.getInTouch().subscribe((data: any) => {
            this.getinTouch = data.data[0];
        })

        this.queriesForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required]],
            phone_no: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        });
    }

    get f() {
        return this.queriesForm.controls;
    }

    keyPressNumbers(event: any) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if ((charCode < 48 || charCode > 57)) {
            event.preventDefault();
            return false;
        } else {
            return true;
        }
    }

    saveQuery() {
        this.submitted = true;

        if (this.queriesForm.invalid) {
            return;
        }

        const paylod = {
            name: this.queriesForm.value.name,
            email: this.queriesForm.value.email,
            message: this.queriesForm.value.message,
            phone_no: this.queriesForm.value.phone_no
        }
        this.contactus.createQuery(paylod).subscribe((data: any) => {
        })
    }

}
