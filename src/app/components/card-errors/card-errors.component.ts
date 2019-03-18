import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-errors',
  templateUrl: './card-errors.component.html',
  styleUrls: ['./card-errors.component.scss']
})
export class CardErrorsComponent implements OnInit, OnChanges {
  @Input() numberErrorsCard = null;
  @Input() dateErrorsCard = null;
  @Input() cvvErrorsCard
  constructor() { }

  ngOnInit() {

  }
  ngOnChanges() {
    console.log(this.numberErrorsCard);
    console.log(this.dateErrorsCard);
    console.log(this.cvvErrorsCard);
  }

}
