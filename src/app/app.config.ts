import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { ProductRepository } from './data/repositories/product.repositories';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProductListImplementation } from './infrastructure/repositories/product-digital.implementation';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: ProductRepository,
      useClass: ProductListImplementation
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay()),
  ],
};
