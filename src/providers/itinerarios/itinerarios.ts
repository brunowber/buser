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
    console.log("qualé truta")
    return this.http.get('https://api.myjson.com/bins/exyla')
  }
}
