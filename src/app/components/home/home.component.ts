import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SharedService } from '../../services/shared.service';
import { ButtonComponent } from '../shared/button/button.component';
import { RecentWorksComponent } from '../shared/recent-works/recent-works.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent, RecentWorksComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.parafaxEffect();
  }

  transform(idElemento: string, event: MouseEvent, moveY?: boolean) {
    moveY ? this.sharedService.transform(idElemento, event.clientX) :
      this.sharedService.transform(idElemento, event.clientX);
  }

  resetTransform(idElemento: string) {
    this.sharedService.resetTransform(idElemento);
  }

  parafaxEffect() {
    const country = document.getElementById('country');
    const description = document.getElementById('description');
    const victor = document.getElementById('victor');
    const victorName = document.getElementById('victorName');

    window.addEventListener('scroll', () => {
      country ? country.style.transform = `translateY(-${scrollY * .08}px)` : '';
      description ? description.style.transform = `translateY(-${scrollY * .08}px)` : '';
      victorName ? victorName.style.transform = `translateY(-${scrollY * .08}px)` : '';

     country ? country.style.opacity = `${1 - (scrollY * .002)}` : '';
      description ? description.style.opacity = `${1 - (scrollY * .002)}` : '';
      victor ? victor.style.opacity = `${1 - (scrollY * .001)}` : '';
    })
  }
}
