import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ItinerariosProvider } from '../../providers/itinerarios/itinerarios'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  protected itiner:any

  constructor(
    public navCtrl: NavController,
    public itinerarioProv:ItinerariosProvider,
    private loading: LoadingController
  ) { 

    let load = this.loading.create({content: 'carregando...'})
    
    console.log('iniciou')
    this.itinerarioProv.getAll().subscribe( (sucesso)=> {
      this.itiner = sucesso
    }, (erro)=>{ 
      console.error('problema na requisicao' + erro)
    } )

    console.log(this.itiner)
    console.log('finalizou')

}
}
