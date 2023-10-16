import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {


  createDb(){
    const movies= [
      {id: 1,name:"How to Train Your Dragon",description:"izle bunu",imgUrl:"htyd.jpg"},
      {id: 2,name:"shrek",description:"bunu da izle",imgUrl:"shrek.jpg"},
      {id: 3,name:"Wreck it Ralph",description:"yorum bulamadım",imgUrl:"wreck_it.jpg"},
      {id: 4,name:"Kung Fu Panda",description:"Po ♥",imgUrl:"kungfuPo.jpg"},
      {id: 5,name:"Madagascar",description:"alex aslan alex",imgUrl:"madagascar.jpg"},
      {id: 6,name:"Star Wars A New Hope",description:"izlemeyen @!*X ",imgUrl:"sw4.jpg"}
  ];
  return {movies};
  }
  constructor() { }
}
