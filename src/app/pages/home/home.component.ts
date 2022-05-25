import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  toggle: boolean;
  model = "";
  modelo = 0;
  filter = false;
  lista: Array<any> = [
    {
      brand: "Porsche",
      cor1: "#1B3033",
      cor2: "#050F11",
      button: "#A30111",
      img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/porsche-logo2.png",
      models: [
        {
          id: 0,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          name: "911",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 1,
          name: "Panamera",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 2,
          name: "Macan",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 3,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 4,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
      ]
    },
    {
      brand: "BMW",
      cor1: "#365869",
      cor2: "#021826",
      button: "#008FCD",
      img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/bmw-logo.png",
      models: [
        {
          id: 0,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          name: "911",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 1,
          name: "Panamera",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 2,
          name: "Macan",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 3,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 4,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
      ]
    },
    {
      brand: "Audi",
      cor1: "#1A2020",
      cor2: "#060807",
      button: "#E31735",
      img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/Audi marca.gif",
      models: [
        {
          id: 0,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          name: "911",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 1,
          name: "Panamera",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 2,
          name: "Macan",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 3,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 4,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
      ]
    },
    {
      brand: "Volvo",
      cor1: "#383838",
      cor2: "#070707",
      button: "#3263A5",
      img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/volvo-logo.png",
      models: [
        {
          id: 0,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          name: "911",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 1,
          name: "Panamera",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 2,
          name: "Macan",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 3,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 4,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
      ]
    },
    {
      brand: "Lamborghini",
      cor1: "#1F1F1F",
      cor2: "#050505",
      button: "#BA7601",
      img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/lamborghini.png",
      models: [
        {
          id: 0,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          name: "911",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 1,
          name: "Panamera",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 2,
          name: "Macan",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 3,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 4,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
      ]
    },
    {
      brand: "Lexus",
      cor1: "#4E4E4E",
      cor2: "#131313",
      button: "#949494",
      img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/lexus.png",
      models: [
        {
          id: 0,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          name: "911",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 1,
          name: "Panamera",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 2,
          name: "Macan",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 3,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 4,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
      ]
    },
    {
      brand: "Maserati",
      cor1: "#34537F",
      cor2: "#2C3B5A",
      button: "#0C2340",
      img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/maserati.png",
      models: [
        {
          id: 0,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          name: "911",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 1,
          name: "Panamera",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 2,
          name: "Macan",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 3,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 4,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
      ]
    },
    {
      brand: "Mercedes-Benz",
      cor1: "#141414",
      cor2: "#434343",
      button: "#1185AC",
      img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/mercedes-benz-logo.png",
      models: [
        {
          id: 0,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          name: "911",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 1,
          name: "Panamera",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 2,
          name: "Macan",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 3,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 4,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
      ]
    },
    {
      brand: "Ferrari",
      cor1: "#D10E23",
      cor2: "#8B0101",
      button: "#E0DC01",
      img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/ferrari logo.png",
      models: [
        {
          id: 0,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          name: "911",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 1,
          name: "Panamera",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 2,
          name: "Macan",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 3,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 4,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
      ]
    },
    {
      brand: "Land Rover",
      cor1: "#09392B",
      cor2: "#007640",
      button: "#064831",
      img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/Land Rover.png",
      models: [
        {
          id: 0,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          name: "911",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 1,
          name: "Panamera",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 2,
          name: "Macan",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 3,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 4,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
      ]
    },
    {
      brand: "Jaguar",
      cor1: "#F4F4F4",
      cor2: "#7B7B7B",
      button: "#9E1B32",
      img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/Jaguar-logo.png",
      models: [
        {
          id: 0,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          name: "911",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 1,
          name: "Panamera",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 2,
          name: "Macan",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 3,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
        {
          id: 4,
          name: "718",
          img: "https://cdn.nickbuilder.com.br/e05baae9-4eef-4401-a531-96dd9b9fa5d4/img/PORSCHE_911_3.0_24V_H6_GASOLINA_CARRERA_PDK_34658317501038270.png"
        },
      ]
    }
  ];

  experienceList: Array<any> = [
    {
      "name": "Aventura",
      "img": "https://cdn.nickbuilder.com.br/6e35be2d-2444-4d9b-b35b-eaa78a74fe60/img/aventura.png"
    },
    {
      "name": "Esportivo",
      "img": "https://cdn.nickbuilder.com.br/6e35be2d-2444-4d9b-b35b-eaa78a74fe60/img/esportivo.png"
    },
    {
      "name": "Família",
      "img": "https://cdn.nickbuilder.com.br/6e35be2d-2444-4d9b-b35b-eaa78a74fe60/img/familia.png"
    },
    {
      "name": "Luxuoso",
      "img": "https://cdn.nickbuilder.com.br/6e35be2d-2444-4d9b-b35b-eaa78a74fe60/img/luxuoso.png"
    },
    {
      "name": "SUVs",
      "img": "https://cdn.nickbuilder.com.br/6e35be2d-2444-4d9b-b35b-eaa78a74fe60/img/suv.png"
    },
    {
      "name": "Conversível",
      "img": "https://cdn.nickbuilder.com.br/6e35be2d-2444-4d9b-b35b-eaa78a74fe60/img/conversível.png"
    },
    {
      "name": "Sedans",
      "img": "https://cdn.nickbuilder.com.br/6e35be2d-2444-4d9b-b35b-eaa78a74fe60/img/sedan.png"
    },
    {
      "name": "Importados",
      "img": "https://cdn.nickbuilder.com.br/6e35be2d-2444-4d9b-b35b-eaa78a74fe60/img/importado.png"
    },
    {
      "name": "Eletrícos",
      "img": "https://cdn.nickbuilder.com.br/6e35be2d-2444-4d9b-b35b-eaa78a74fe60/img/eletric car.png"
    },
    {
      "name": "Blindados",
      "img": "https://cdn.nickbuilder.com.br/6e35be2d-2444-4d9b-b35b-eaa78a74fe60/img/blindado.png"
    },
  ]
  selected: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
