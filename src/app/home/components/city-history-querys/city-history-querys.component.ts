import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-history-querys',
  templateUrl: './city-history-querys.component.html',
  styleUrls: ['./city-history-querys.component.scss'],
})
export class CityHistoryQuerysComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() state: string;
  @Output() selectCity: EventEmitter<string> = new EventEmitter();

  ngOnInit() {}

  onClick() {
    this.selectCity.emit(this.id);
  }
}
