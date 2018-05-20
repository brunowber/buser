import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ItinerariosProvider } from '../../providers/itinerarios/itinerarios';

/**
 * Generated class for the LinhasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-linhas',
  templateUrl: 'linhas.html',
})
export class LinhasPage {

  protected itiner:any
  protected horario: any
  public buttonClicked: boolean = true
  public chegada: any
  public saida: any 
  public linha: any 

  constructor(
    public navCtrl: NavController,
    public itinerarioProv:ItinerariosProvider,
    public horarioProv:ItinerariosProvider,
    public navParams: NavParams,
    private loading: LoadingController,
    )
    {
      this.itinerarioProv.getLinha(this.navParams.get('id')).subscribe( (sucesso)=> {
        this.itiner = sucesso
      }, (erro)=>{ 
        console.error('problema na requisicao' + erro)
      } )
    console.log(this.navParams.get('id'))
  }

  public getHorario(id: any){
    let load = this.loading.create({content: 'carregando...'})
    if (this.buttonClicked == true){
      this.buttonClicked = false
      load.present();
    }
    else if (this.buttonClicked == false){
      this.buttonClicked = true
    }
    console.log("botao checado ",this.buttonClicked )

    this.horarioProv.getHorario(id).subscribe((sucesso)=> {
      this.horario = sucesso
      this.linha = id
      console.log("linha ", this.linha)
      this.chegada = this.horario[0].localChegada;
      this.saida = this.horario[0].localSaida;
      load.dismiss()
      
    }, (erro)=>{ 
      console.error('problema na requisicao' + erro)
    } )
    
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinhasPage');
  }

}
