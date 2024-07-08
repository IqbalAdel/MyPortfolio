import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @ViewChild('checkbox') checkbox!: NgModel;

  isChecked: boolean = false;

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = false;
  http = inject(HttpClient)

  post = {
    endPoint: 'https://www.iqbal-adel.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm){
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        })
      }
    else if(ngForm.valid && ngForm.submitted && this.isChecked && this.mailTest){
      ngForm.resetForm();
      console.log('worked fine')
    }
  }

  checkValue() {
    this.checkbox.control.markAsTouched();
    // console.log('Checkbox clicked, current value:', this.isChecked);
    // console.log('Checkbox touched:', this.checkbox.touched);
    // console.log('Checkbox valid:', this.checkbox.valid);
  }

}
