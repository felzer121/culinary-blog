import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class TitleChangesService {

  private titles = {
    '/home': 'Главная',
    '/result': 'Результаты поиска'
  };

  public constructor(private titleService: Title, private router: Router ) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setTitle(this.titles[event.url]);
      }
    });

  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
