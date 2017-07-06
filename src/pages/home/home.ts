import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Alert, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, public translateService: TranslateService) {}

  translateToSpanish() {
    this.translateService.use('es');
  }

  translateToEnglish() {
    this.translateService.use('en');
  }

  translateToGerman() {
    this.translateService.use('de');
    
  }

}


