import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-consts',
  templateUrl: './delivery-consts.component.html'
})
export class DeliveryConstsComponent implements OnInit {

  @Input() delivery:number
  @Input() delivery:number

  constructor() { }

  ngOnInit() {
  }

}
