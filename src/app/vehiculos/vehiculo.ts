export class Vehiculo {
  static contadorId = 1; // Contador estático para asignar ID en orden  
    id: number;  
    marca: string;
    linea: string;
    modelo: number;
   
    public constructor(marca: string, linea: string, modelo: number) {
      this.id = Vehiculo.contadorId++; // Asigna el ID actual y luego incrementa el contador
      this.marca = marca;
      this.linea = linea;
      this.modelo = modelo;
    }
   }
