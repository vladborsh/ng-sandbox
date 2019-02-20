import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html',
  styleUrls: ['./usd.component.scss']
})
export class UsdComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
