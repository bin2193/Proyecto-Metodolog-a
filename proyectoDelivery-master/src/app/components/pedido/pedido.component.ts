import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';



@Component({
selector: 'app-pedido',
templateUrl:'./pedido.component.html',
styleUrls: ['./pedido.component.css']})

export class PedidosComponent implements OnInit {

    
  platosArr:any[] = [];  

  constructor(private servicioDelivery:DeliveryService, private router:Router) {         }
    
  ngOnInit(): void {     
    this.platosArr = this.servicioDelivery.getPlatos();     
    console.log(this.platosArr);   }  
  public verPlato(idx:string){ 
    this.router.navigate(['/detallePlato', idx])   
  }


}