import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, finalize, retry, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
  {
    console.log("Interceptor invoked");
    const hardcodedToken = '1d38d128-0671-4121-8084-f6332a992a40';
    //  const hardcodedToken = sessionStorage.getItem("AUTH_TOKEN");

    let updatedReq:HttpRequest<any> = req.clone({
      setHeaders: {
          Authorization: `Bearer ${hardcodedToken}`
      }
     });

     		
      return next.handle(updatedReq)
     .pipe(
       // Retry on failure,  2 ---  two times
       retry(2),

       // Handle errors
       catchError((error: HttpErrorResponse) => {
         // TODO: Add error handling logic here
         //alert(`HTTP Error: ${req.url}`);
        
        if(error.status == 404)
        {
          console.log("Requested URL is not found. Please check the url");
        }
        else if(error.status == 500)
         {
           console.log("There is an issue at server to process your request. Please verify input data");
         }
         else
         {
             console.log(`Error Url: ${req.url}`);
             console.log(`Error Message: ${error.message}`);
         }
         return throwError(error);
       })
     );
  }
}




  