import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';


export const AuthInterceptorService: HttpInterceptorFn =(req,next)=>{



    console.log("Auth interceptor called");
    const cloned=req.clone({
      setHeaders:{
          Authorization: 'Bearer dummy-token'
      }
    })
      // Handle the request and use tap for logging
  return next(cloned).pipe(
   tap({
     next: (event) => {
       // Log the event (could be request or response)
       console.log('Event:', event);

       // If it's a successful response, log it
       if (event instanceof HttpResponse) {
         console.log('Response Received:', event);
       }
     },
     error: (error) => {
       // Handle the error response (logging for example)
       console.error('Error occurred:', error);
     }
   })
 );
 
}
