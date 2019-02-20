import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-yen',
  templateUrl: './yen.component.html',
  styleUrls: ['./yen.component.scss']
})
export class YenComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
