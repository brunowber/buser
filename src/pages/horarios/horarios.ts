import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItinerariosProvider } from '../../providers/itinerarios/itinerarios';

/**
 * Generated class for the HorariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horarios',
  templateUrl: 'horarios.html',
})
export class HorariosPage {
  protected horario:any

  constructor(
    public navCtrl: NavController,
    public HorarioProv:ItinerariosProvider,
    public navParams: NavParams,
    )
    {
      this.HorarioProv.getHorario(this.navParams.get('id')).subscribe( (sucesso)=> {
        this.horario = sucesso
      }, (erro)=>{ 
        console.error('problema na requisicao' + erro)
      } )
    console.log(this.navParams.get('id'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorariosPage');
  }

}
