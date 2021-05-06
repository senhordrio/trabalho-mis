import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageService } from 'src/domain/services/local-storage.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss'],
})
export class CityDetailsComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() state: string;
  @Output() selectCity: EventEmitter<string> = new EventEmitter();

  constructor(private readonly storageService: StorageService,) {}
  
  ngOnInit() {
  
  }

  
  onClick() {
      this.selectCity.emit(this.id);
      this.storageService.set(this.id, this.name)
  }
}
