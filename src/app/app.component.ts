import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { GlobalServiceService } from './service/global-service.service';
import { PrivacyComponent } from './privacy/privacy.component';


@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet, MainComponent, ImprintComponent, PrivacyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio'; 

  global_service = inject(GlobalServiceService)
  
}
