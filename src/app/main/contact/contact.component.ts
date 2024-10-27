import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { GlobalServiceService } from '../../service/global-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SnackbarComponent } from '../../snackbar/snackbar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit{
  @ViewChild('checkbox') checkbox!: NgModel;
  // @ViewChild(SnackbarComponent) snack!: SnackbarComponent;

  // showMessage(): void {
  // }

  visible: boolean = false;

  show(): void {
    this.visible = true;
    setTimeout(() => this.visible = false, 2000); // Snackbar verschwindet nach 3 Sekunden
  }

  isChecked: boolean = false;

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = false;
  http = inject(HttpClient)
  translation = inject(GlobalServiceService)

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

  constructor(private route: ActivatedRoute, private router: Router) { }

  scrollToTop(){
    this.router.navigate([], { fragment: "<#menu>" });
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  onSubmit(ngForm: NgForm){
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.show();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        })
      }
    else if(ngForm.valid && ngForm.submitted && this.isChecked && this.mailTest){
      ngForm.resetForm();
      this.show();
      // try {
      //   this.snack.show();
      // } catch (error) {
      //   console.error('Fehler beim Anzeigen der Snackbar:', error);
      // }

    }
  }

  checkValue() {
    this.checkbox.control.markAsTouched();

  }

  

}
