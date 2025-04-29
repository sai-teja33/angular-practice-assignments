import { HttpInterceptorFn } from '@angular/common/http';

export const loggingInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("logging interceptor called!")
  console.log("Outgoing request: ",req.url);
  return next(req);
};
