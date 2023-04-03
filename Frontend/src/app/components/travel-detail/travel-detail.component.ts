import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
 selector: 'app-travel-detail',
 templateUrl: './travel-detail.component.html',
 styleUrls: ['./travel-detail.component.css']
})
export class TravelDetailComponent implements OnInit {
 getId: any;
 updateForm: FormGroup;
 
 constructor(
 public formBuilder: FormBuilder,
 private router: Router,
 private ngZone: NgZone,
 private activatedRoute: ActivatedRoute,
 private crudService: CrudService
 ) {
 this.getId = this.activatedRoute.snapshot.paramMap.get('id');
 this.crudService.GetTravel(this.getId).subscribe(res => {
 this.updateForm.setValue({
 name: res['name'],
 price: res['price'],
 description: res['description']
 });
 });
 this.updateForm = this.formBuilder.group({
 name: [''],
 price: [''],
 description: ['']
 })
 }
 ngOnInit() { }
 onUpdate(): any {
 this.crudService.updateTravel(this.getId, this.updateForm.value)
 .subscribe(() => {
 console.log('Data updated successfully!')
 this.ngZone.run(() => this.router.navigateByUrl('/travels-list'))
 }, (err) => {
 console.log(err);
 });
 }
}
