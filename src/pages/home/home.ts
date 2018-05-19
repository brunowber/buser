import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItinerariosProvider } from '../../providers/itinerarios/itinerarios'
import { LinhasPage } from '../linhas/linhas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  protected itiner:any

  constructor(
    public navCtrl: NavController,
    public itinerarioProv:ItinerariosProvider,
  ) { 
   
    console.log('iniciou')
    this.itinerarioProv.getAll().subscribe( (sucesso)=> {
      this.itiner = sucesso
    }, (erro)=>{ 
      console.error('problema na requisicao' + erro)
    } )
}

protected abrirPosts(id:any){
  this.navCtrl.push(LinhasPage, {id: id})
}
}
