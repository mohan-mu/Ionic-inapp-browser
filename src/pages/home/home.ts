import { Component } from '@angular/core';
import { NavController ,Platform} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private iab: InAppBrowser,public platform: Platform) {

  }


    ngOnInit(){

        const browser = this.iab.create('http://dashboard.agriot.co.in/','_self',{location:'no'}); 

    }

}
