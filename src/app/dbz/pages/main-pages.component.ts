import { ChangeDetectorRef, Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPagesComponent {

  constructor(public dbzService:DbzService) {

  }



}
