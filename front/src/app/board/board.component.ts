import { Component, OnInit } from '@angular/core';
import { AdService } from '../../services/ad.service'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  ads: Array<any>;

  constructor(private adService: AdService ) { 
    this.adService.getList().subscribe(data => this.ads = data);
  }

  ngOnInit() {
  }

}

