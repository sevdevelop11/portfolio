import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../shared/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      organization: new FormControl(''),
      services: new FormControl(''),
      message: new FormControl('', Validators.required)
  });
  
  submitForm() {
    Object.keys(this.contactForm.controls).forEach(field => {
      const control = this.contactForm.get(field);           
      control?.markAsTouched({ onlySelf: true });
    });

    if (this.contactForm.valid) {
      console.log("VALID")
    } else {
      console.log("INVALID")
    }

  }
}
