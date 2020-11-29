import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

import {environment} from '../../../../../environments/environment.prod'
import * as Mapboxgl from 'mapbox-gl';
import {Contacto} from '../../../../models/contacto';
import {resetFakeAsyncZone} from '@angular/core/testing';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  providers:[Contacto]
})
export class ContactComponent implements OnInit {

  map: Mapboxgl.map;

  validateForm: FormGroup;

  submitForm(value: { userName: string; email: string; comment: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    localStorage.setItem('comentario',JSON.stringify(value));
    this.contacto.nombre = value.userName
    this.contacto.email = value.email
    this.contacto.comentario = value.comment
    console.log(value);
  }


  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({error: true, duplicated: true});
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {error: true, required: true};
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {confirm: true, error: true};
    }
    return {};
  };

  constructor(private fb: FormBuilder,private contacto : Contacto ) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      comment: ['', [Validators.required]]


    });
  }

  mapbox() {

    Mapboxgl.accessToken = environment.accessTokenMapbox;
    this.map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.352387, 8.2486323],
      zoom: 15
    });

    var marker = new Mapboxgl.Marker()
      .setLngLat([-73.3568741,8.2460949])
      .addTo(this.map);
  }




  ngOnInit() {
    this.mapbox()

  }
}
