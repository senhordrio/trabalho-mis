import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/domain/entities/city';
import { SearchCityService } from 'src/domain/services/search-city.service';
import { StorageService } from 'src/domain/services/local-storage.service';
import { CityHistory } from 'src/domain/entities/history';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cities: City[];
  histories: CityHistory[];
  hasError: boolean = false;
  errorMessage: string;

  constructor(
    private readonly searchService: SearchCityService,
    private readonly storageService: StorageService,
    private readonly router: Router
  ) {}


  async ionViewWillEnter() {
    this.histories = await this.storageService.getAll()
  }

  async onSearch(query: string) {
    try {
      this.hasError = false;
      this.cities = await this.searchService.search(query);
    } catch (error) {
      this.hasError = true;
      this.errorMessage = error.message;
    }
  }

  onSelectCity(cityId: string) {
    this.router.navigateByUrl(`/weather/${cityId}`);
  }

  onClick(){
    this.storageService.clearAll()
    this.ionViewWillEnter();
  }
}


