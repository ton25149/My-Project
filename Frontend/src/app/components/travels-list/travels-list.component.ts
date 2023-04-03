import { Component, OnInit,NgZone} from '@angular/core';
import { CrudService } from '../../service/crud.service';
@Component({
 selector: 'app-travels-list',
 templateUrl: './travels-list.component.html',
 styleUrls: ['./travels-list.component.css']
})
export class TravelsListComponent implements OnInit {
 
 Travels:any = [];
 constructor(private crudService: CrudService) { }
 ngOnInit(): void {
 this.crudService.GetTravels().subscribe(res => {
 console.log(res)
 this.Travels =res;
 }); 
 }
 delete(id:any, i:any) {
 console.log(id);
 if(window.confirm('Do you want to go ahead?')) {
 this.crudService.deleteTravel(id).subscribe((res) => {
 this.Travels.splice(i, 1);
 })
 }
 }
}