import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidebar-account-tab',
  templateUrl: './sidebar-account-tab.component.html',
  styleUrls: ['./sidebar-account-tab.component.css'],
  animations: [
    trigger('validationMessage', [
      state('void', style({
        height: 0,
        opacity: 0
      })),
    state('*', style({
        height: '*',
        opacity: 1,
      })),
    transition('void <=> *', [
        animate('.25s ease-out')
      ]
    )
    ]),
    trigger('accountCards', [
      state('hidden', style({
        display: 'none',
        opacity: 0
      })),
    state('active', style({
        display: 'block',
        opacity: 1,
      })),
    transition('hidden <=> active', [
        animate('.25s ease-out')
      ]
    )
    ]),
  ]
})
export class SidebarAccountTabComponent implements OnInit {
  public signinForm: FormGroup;
  public forgotPasswordForm: FormGroup;
  public registerForm: FormGroup;

  public auth = false;

  cardStates = {
    signIn: 'hidden',
    forgotPassword: 'hidden',
    register: 'hidden',
  }

  constructor() { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d^a-zA-Z0-9]{8,}$/)]),
    });
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d^a-zA-Z0-9]{8,}$/)]),
    });
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{4,20}/)]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
    this.cardStates.signIn = 'active';
  }

  setAsActive(card) {
    for (const cards in this.cardStates) {
      this.cardStates[cards] = 'hidden';
    }

    this.cardStates[card] = 'active';
  }
}
