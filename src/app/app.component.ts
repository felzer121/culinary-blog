import { Component } from '@angular/core';
import { TitleChangesService } from './services/titleChanges/title-changes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(private titleChangesService: TitleChangesService) { }
}
