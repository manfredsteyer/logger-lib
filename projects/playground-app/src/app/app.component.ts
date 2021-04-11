// projects/playground-app/src/app/app.component.ts

import { Component } from '@angular/core';
import { LoggerService } from '@my/logger-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playground-app';

  constructor(private logger: LoggerService) {
    logger.log('Manfred war hier!');
  }
}
