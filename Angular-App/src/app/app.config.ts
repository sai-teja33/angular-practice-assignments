import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {  HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';


export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch(),),provideHttpClient(withInterceptors([AuthInterceptorService])),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),
   
  ]
};
