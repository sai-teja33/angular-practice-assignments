import { HttpEventType, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("auth interceptor called");
  const cloneReq = req.clone({
    setHeaders: { 'Auth': 'demo123' }
  })
  return next(cloneReq).pipe(
    tap((event) => {
      if (event.type == HttpEventType.Response) {
        console.log("Response has arrived:", event.body)
      }
    }),
    catchError(err => {
      console.error("Error intercepted:", err);
      return throwError(() => err)
    })
  )
};
