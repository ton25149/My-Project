import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";



@Component({
 selector: 'app-infohome',
 templateUrl: './infohome.component.html',
 styleUrls: ['./infohome.component.css']
})
export class InfohomeComponent implements OnInit {
 infoForm: FormGroup;
 
 constructor(
 public formBuilder: FormBuilder,
 private router: Router,
 private ngZone: NgZone,
 private crudService: CrudService
 ) { 
 this.infoForm = this.formBuilder.group({
    name: [''],
    lastname: [''],
    email: [''],
    address: [''],
    age: ['']


 
 })
 }
 ngOnInit() { }

 onSubmit(): any {
 this.crudService.AddTravel(this.infoForm.value)
 .subscribe(() => {
 console.log('Data added successfully!')
 this.ngZone.run(() => this.router.navigateByUrl('/travels-list'))
 }, (err) => {
 console.log(err);
 });
 }
}