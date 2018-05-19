import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItinerariosProvider } from '../providers/itinerarios/itinerarios';
import { LinhasPage } from '../pages/linhas/linhas';
import { HorariosPage } from '../pages/horarios/horarios';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LinhasPage,
    HorariosPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LinhasPage,
    HorariosPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItinerariosProvider
  ]
})
export class AppModule {}
