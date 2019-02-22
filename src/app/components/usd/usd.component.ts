import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html',
  styleUrls: ['./usd.component.scss']
})
export class UsdComponent implements OnInit {
  nameControl: FormControl;
  usdCompon: number = null;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.nameControl = new FormControl();
    this.nameControl.valueChanges.subscribe(value => this.dataService.setUsd(value));
    this.dataService.getYen().subscribe(value => {
      this.usdCompon = value / 110;
    })
    }
}
