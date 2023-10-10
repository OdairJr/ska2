import { ElementRef, Injectable } from '@angular/core';
import {} from 'googlemaps';
import { Establishment } from '../models/establishment.model';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  public establishment: Establishment;

  public establishments: Establishment[] = [
    {
      id: '1',
      name: 'Oficina AutoMec',
      cpfCnpj: '1234567890',
      description:
        'Oficina mecânica especializada em reparos gerais de automóveis.',
      address: {
        street: 'Rua Nestor Ferreira da Rocha Junior',
        number: '290',
        complement: '',
        neighborhood: 'Vila Caiçara',
        city: 'Praia Grande',
        state: 'São Paulo',
        zipCode: '11706-100',
      },
      phone: '(11) 1234-5678',
      serviceType: 'Mecânica Geral',
      image: 'imagem_oficina1.jpg',
    },
    {
      id: '2',
      name: 'Oficina PinturaTop',
      cpfCnpj: '9876543210',
      description: 'Oficina especializada em serviços de pintura automotiva.',
      address: {
        street: 'Rua Afonso D Escragnolle Taunay',
        number: '785',
        complement: '',
        neighborhood: 'Jardim Esmeralda',
        city: 'Praia Grande',
        state: 'São Paulo',
        zipCode: '11713-490',
      },
      phone: '(22) 9876-5432',
      serviceType: 'Pintura Automotiva',
      image: 'imagem_oficina2.jpg',
    },
    {
      id: '3',
      name: 'Oficina BorrachaBoa',
      cpfCnpj: '5678901234',
      description: 'Oficina de conserto e troca de pneus de carros e motos.',
      address: {
        street: 'Rua dos Pneus',
        number: '789',
        complement: 'Sala C',
        neighborhood: 'Centro',
        city: 'Cidade C',
        state: 'Estado C',
        zipCode: '98765-432',
      },
      phone: '(33) 5555-5555',
      serviceType: 'Conserto de Pneus',
      image: 'imagem_oficina3.jpg',
    },
    {
      id: '4',
      name: 'Oficina ElétricaTop',
      cpfCnpj: '3456789012',
      description:
        'Oficina especializada em serviços elétricos para veículos.',
      address: {
        street: 'Avenida da Eletricidade',
        number: '101',
        complement: 'Sala D',
        neighborhood: 'Bairro D',
        city: 'Cidade D',
        state: 'Estado D',
        zipCode: '76543-210',
      },
      phone: '(44) 1234-5678',
      serviceType: 'Serviços Elétricos',
      image: 'imagem_oficina4.jpg',
    },
    {
      id: '5',
      name: 'Oficina TrocaÓleo',
      cpfCnpj: '6789012345',
      description:
        'Oficina especializada em troca de óleo e manutenção de motores.',
      address: {
        street: 'Rua do Óleo',
        number: '202',
        complement: 'Sala E',
        neighborhood: 'Centro',
        city: 'Cidade E',
        state: 'Estado E',
        zipCode: '65432-109',
      },
      phone: '(55) 9876-5432',
      serviceType: 'Troca de Óleo',
      image: 'imagem_oficina5.jpg',
    },
    {
      id: '6',
      name: 'Oficina VidroForte',
      cpfCnpj: '8901234567',
      description:
        'Oficina especializada em reparo e substituição de vidros automotivos.',
      address: {
        street: 'Avenida dos Vidros',
        number: '303',
        complement: 'Sala F',
        neighborhood: 'Bairro F',
        city: 'Cidade F',
        state: 'Estado F',
        zipCode: '87654-321',
      },
      phone: '(66) 5555-5555',
      serviceType: 'Reparo de Vidros',
      image: 'imagem_oficina6.jpg',
    },
    {
      id: '7',
      name: 'Oficina ArCondicionado',
      cpfCnpj: '2345678901',
      description:
        'Oficina especializada em manutenção e reparo de sistemas de ar condicionado.',
      address: {
        street: 'Rua do Ar',
        number: '404',
        complement: 'Sala G',
        neighborhood: 'Centro',
        city: 'Cidade G',
        state: 'Estado G',
        zipCode: '43210-987',
      },
      phone: '(77) 1234-5678',
      serviceType: 'Ar Condicionado',
      image: 'imagem_oficina7.jpg',
    },
    {
      id: '8',
      name: 'Oficina FunilariaExpress',
      cpfCnpj: '0123456789',
      description: 'Oficina de funilaria e pintura rápida para veículos.',
      address: {
        street: 'Avenida da Funilaria',
        number: '505',
        complement: 'Sala H',
        neighborhood: 'Bairro H',
        city: 'Cidade H',
        state: 'Estado H',
        zipCode: '98765-432',
      },
      phone: '(88) 9876-5432',
      serviceType: 'Funilaria e Pintura',
      image: 'imagem_oficina8.jpg',
    },
    {
      id: '9',
      name: 'Oficina AlinhamentoTop',
      cpfCnpj: '4567890123',
      description:
        'Oficina especializada em alinhamento e balanceamento de rodas.',
      address: {
        street: 'Rua das Rodas Alinhadas',
        number: '606',
        complement: 'Sala I',
        neighborhood: 'Centro',
        city: 'Cidade I',
        state: 'Estado I',
        zipCode: '54321-098',
      },
      phone: '(99) 1234-5678',
      serviceType: 'Alinhamento de Rodas',
      image: 'imagem_oficina9.jpg',
    },
  ];

  private map?: google.maps.Map;

  constructor() { }

  public createMap(mapElement: ElementRef) {
    const mapProperties = {
      center: new google.maps.LatLng(-23.6824262, -46.6910678),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    if (mapElement) {
      this.map = new google.maps.Map(mapElement.nativeElement, mapProperties);
    }
  }

  private getLatLongFromAddress(address: string, callback: (latitude: number, longitude: number) => void) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function (results: any, status: string) {
      if (status === 'OK') {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();
        callback(latitude, longitude);
      } else {
        console.error('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  private addMarkerAndCenterMap(latitude: number, longitude: number) {
    if(!this.map) return;

    const marker = new google.maps.Marker();
    marker.setPosition(new google.maps.LatLng(latitude, longitude));
    marker.setMap(this.map);

    this.map.setCenter(new google.maps.LatLng(latitude, longitude));
  }

  public addMarkerToMap(establishment: Establishment) {
    if (!this.map) return;

    this.getLatLongFromAddress(establishment.address.street + ', ' + establishment.address.number + ', ' +
      establishment.address.neighborhood + ', ' + establishment.address.city + ', ' + establishment.address.state,
      (latitude, longitude) => {
        this.addMarkerAndCenterMap(latitude, longitude);
      });
  }
}
