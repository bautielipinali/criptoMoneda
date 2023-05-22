import { Component } from '@angular/core';

interface Cripto {
  nombre: string;
  sigla: string;
  precio: number;
}

interface nuevaCripto {
  nombre: string;
  sigla: string;
  precio: number;
}

@Component({
  selector: 'app-lista-criptos',
  templateUrl: './lista-criptos.component.html',
  styleUrls: ['./lista-criptos.component.css']
})
export class ListaCriptosComponent {
  criptos: Cripto[] = [
    { nombre: 'Bitcoin', sigla: 'BTC', precio: 26649 },
    { nombre: 'Ethereum', sigla: 'ETH', precio: 1801 },
    { nombre: 'Tether', sigla: 'USDT', precio: 1 },
    { nombre: 'BNB', sigla: 'BNB', precio: 305 },
    { nombre: 'Litecoin', sigla: 'LTC', precio: 91 }
  ];

  nueva: nuevaCripto = {
    nombre: '',
    sigla: '',
    precio: 0
  };

  crearCripto() {
    let nuevaCripto: Cripto = {
      nombre: this.nueva.nombre,
      sigla: this.nueva.sigla,
      precio: this.nueva.precio
    };

    this.criptos.push(nuevaCripto);

    // Limpio los campos para que esten vacios
    this.nueva.nombre = '';
    this.nueva.sigla = '';
    this.nueva.precio = 0;
  }

  eliminarCripto(index: number) {
    this.criptos.splice(index, 1);
  }

  filterList(filterType: any) {
    switch (filterType.target.value) {
      case 'alfabetico':
        this.criptos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'priceAsc':
        this.criptos.sort((a, b) => a.precio - b.precio);
        break;
      case 'priceDesc':
        this.criptos.sort((a, b) => b.precio - a.precio);
        break;
      default:
        break;
    }
  }
}



  
  