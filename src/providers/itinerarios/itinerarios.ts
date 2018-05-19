import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ItinerariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class ItinerariosProvider {
  private itiner:any = []

  constructor(public http: HttpClient) {
    console.log('Hello ItinerariosProvider Provider');
  }
  public getAll() {
    return this.http.get('https://api.myjson.com/bins/exyla')
  }
  public getLinha(id: any) {
    if (id == 1)
      return this.http.get('https://api.myjson.com/bins/1064p6') //Inter urbano
    if (id== 2)
      return this.http.get('https://api.myjson.com/bins/laakq') //Rodoviario
  }
  public getHorario(id: any){
    console.log("horario ", id)
    if (id == 1){
      return this.http.get('https://api.myjson.com/bins/kc7q2') //Porto grande
    }
    if (id ==2 ){
      return this.http.get('https://api.myjson.com/bins/tknbe') //são Francisco
    }
    if (id ==3 ){
      return this.http.get('https://api.myjson.com/bins/13eq8a ') //são Francisco
    }
  }
}
