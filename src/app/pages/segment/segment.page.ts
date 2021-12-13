import { Component, OnInit } from '@angular/core'
import { DataService } from '../../services/data.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  superHeroes: Observable<any>
  publisher: string = '';
  constructor(private dataServices: DataService) {}

  ngOnInit() {
    this.superHeroes = this.dataServices.getHeroes()
  }

  segmentChanged(event) {
    
    this.publisher =event.detail.value;
    if (event.detail.value == 'Todos') {
      this.publisher = '';
    }
  }
}
