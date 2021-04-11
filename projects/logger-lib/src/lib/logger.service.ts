// projects/logger-lib/src/lib/logger.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message: string): void {
    const date = new Date().toISOString().substr(0, 10);
    console.log(`[${date}] ${message}`);
  }

}
