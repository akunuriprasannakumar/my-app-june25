import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {

  id:number=0;

Vehicle: any={}
  constructor(private _activatedRoute:ActivatedRoute, private _vehiclesService:VehiclesService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;

      },(err:any)=>{
        alert("Unable to get ID")
      }
    )
    _vehiclesService.getVehicle(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.Vehicle=data;

      },(err:any)=>{
        alert("Internal server Error")
      }

    )

  }

}
