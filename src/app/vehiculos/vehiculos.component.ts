// src/app/vehiculos/vehiculos.component.ts
import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { dataVehiculos } from './datavehiculos'; // Asegúrate de que este archivo existe

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  vehiculos: Array<Vehiculo> = []; // Declaración de la lista de vehículos
   
  constructor() { }

  // Método público para obtener la lista de vehículos
  getVehiculoList(): Array<Vehiculo> {
    return dataVehiculos; // Retorna la lista de vehículos desde el archivo de datos
  }

  ngOnInit() {
    this.vehiculos = this.getVehiculoList(); // Inicializa la lista de vehículos al crear el componente
  
  }
}
