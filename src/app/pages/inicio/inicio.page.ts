import { Component, OnInit } from '@angular/core'
import { MenuController } from '@ionic/angular'
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Observable<Componente[]> ;

  constructor(private menuController: MenuController,private dataServices :DataService) {

  }

  ngOnInit() {
    this.componentes=this.dataServices.getMenuOpts();
   }


  mostrarMenu() {
    this.menuController.open('first');

  }



}
