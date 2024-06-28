import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
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

  onSubmit(ngForm: NgForm){
    if(ngForm.valid && ngForm.submitted && this.isChecked){
      console.log(this.contactData)
    }
  }

  checkValue() {
    this.checkbox.control.markAsTouched();
    console.log('Checkbox clicked, current value:', this.isChecked);
    console.log('Checkbox touched:', this.checkbox.touched);
    console.log('Checkbox valid:', this.checkbox.valid);
  }

}
