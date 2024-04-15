import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonComponent } from '../shared/button/button.component';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { Firestore, addDoc, collection, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  firestore: Firestore = inject(Firestore);

  constructor(private router: Router) {}

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    organization: new FormControl(''),
    services: new FormControl(''),
    message: new FormControl('', Validators.required),
  });

  submitForm() {
    Object.keys(this.contactForm.controls).forEach(field => {
      const control = this.contactForm.get(field);           
      control?.markAsTouched({ onlySelf: true });
    });

    if (this.contactForm.valid) {
      addDoc(collection(this.firestore, 'responses'), this.contactForm.value)
        .then((responsesRef) => {
          collection(this.firestore, 'responses');
          setDoc(responsesRef, {
            ...this.contactForm.value,
            id: responsesRef.id,
          });
        })
        .finally(() => {
          this.contactForm.reset();
          this.router.navigate(['/contact/success']);
        });
    }
  }
}
