import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  mostrarMas?: boolean;
  detalles?: string;
}

@Injectable({
  providedIn: 'root'
})
export class Products {
  private products: Product[] = [
    {
      id: 1,
      nombre: 'Toyota SUV',
      descripcion: 'Espaciosa, cómoda y confiable para la familia',
      precio: 6500,
      imagen: '/img/toyota1.jpg',
      detalles: 'La Toyota SUV combina diseño robusto y elegancia. Ideal para ciudad y viajes largos. Motor 2.5L, transmisión automática, tracción 4x4 y capacidad para 7 pasajeros.'
    },
    {
      id: 2,
      nombre: 'Seat Ibiza',
      descripcion: 'Compacto, eficiente y juvenil',
      precio: 9200,
      imagen: '/img/ibiza.jpg',
      detalles: 'El Seat Ibiza es un hatchback deportivo con motor 1.6L y excelente rendimiento de combustible. Equipado con tecnología de conectividad y seguridad avanzada.'
    },
    {
      id: 3,
      nombre: 'Toyota Raize',
      descripcion: 'Compacto, versátil y moderno',
      precio: 3900,
      imagen: '/img/toyota2.jpg',
      detalles: 'Toyota Raize es un SUV compacto ideal para la ciudad. Motor turbo 1.0L, interiores inteligentes y pantalla multimedia de 8". Perfecto para quienes buscan estilo y eficiencia.'
    },
    {
      id: 4,
      nombre: 'Toyota Supra',
      descripcion: 'Deportivo y potente con diseño icónico',
      precio: 13900,
      imagen: '/img/toyota3.jpg',
      detalles: 'El Toyota Supra ofrece una experiencia de conducción emocionante. Motor 3.0L turbo con 382 HP, tracción trasera, y diseño aerodinámico. Ideal para entusiastas de la velocidad.'
    },
    {
      id: 5,
      nombre: 'Mazda CX-5',
      descripcion: 'SUV elegante y dinámico',
      precio: 13900,
      imagen: '/img/mazda1.jpg',
      detalles: 'Mazda CX-5 es un SUV premium con motor Skyactiv-G 2.5L, interiores sofisticados, y sistema de tracción i-Activ AWD. Tecnología i-Activesense de seguridad incluida.'
    },
    {
      id: 6,
      nombre: 'Mazda 3',
      descripcion: 'Sedán moderno y eficiente',
      precio: 13900,
      imagen: '/img/mazda2.jpg',
      detalles: 'El Mazda 3 ofrece un manejo ágil y diseño deportivo. Motor 2.0L o 2.5L con opción turbo. Interiores refinados y pantalla de infoentretenimiento con control por voz.'
    },
    {
      id: 7,
      nombre: 'Nissan X-Trail',
      descripcion: 'SUV familiar con gran capacidad y confort',
      precio: 13900,
      imagen: '/img/nissan1.jpg',
      detalles: 'Nissan X-Trail (Xtrac) combina versatilidad y tecnología. Motor 2.5L, asientos reclinables en 3 filas y sistema de asistencia ProPILOT para una conducción semiautónoma.'
    },
    {
      id: 8,
      nombre: 'Nissan Versa 2023',
      descripcion: 'Sedán accesible, seguro y con gran espacio interior',
      precio: 13900,
      imagen: '/img/nissan2.jpg',
      detalles: 'El Nissan Versa 2023 viene con motor 1.6L, sistema de frenado automático, alerta de punto ciego y pantalla táctil. Excelente opción para movilidad urbana cómoda y segura.'
    }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
