import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SharedService } from '../../services/shared.service';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent],
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
      let paraEffect = scrollY;
      country ? country.style.marginLeft = `-${paraEffect * .4}px` : '';
      description ? description.style.marginRight = `-${paraEffect * .4}px` : '';
      victorName ? victorName.style.marginBottom = `${paraEffect * .08}px` : '';

      country ? country.style.opacity = `${1 - (paraEffect * .002)}` : '';
      description ? description.style.opacity = `${1 - (paraEffect * .002)}` : '';
      victor ? victor.style.opacity = `${1 - (paraEffect * .001)}` : '';
    })
  }
}
