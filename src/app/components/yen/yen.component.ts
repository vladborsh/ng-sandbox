import {Component, OnChanges, OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-yen',
  templateUrl: './yen.component.html',
  styleUrls: ['./yen.component.scss']
})
export class YenComponent implements OnInit {
  nameControl: FormControl;
  yenCompon: number = null;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.nameControl = new FormControl();
    this.nameControl.valueChanges.subscribe(value => this.dataService.setYen(value));
    this.dataService.getUsd().subscribe(value => {
      this.yenCompon = value * 110;
    })
  }

}
