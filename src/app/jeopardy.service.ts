import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

<<<<<<< HEAD


@Injectable()
export class JeopardyService {

 private baseUrl: string = 'http://jservice.io/api/';

 constructor (private http: Http) {}

      getRecords(endpoint: string): Observable<any[]> {
=======
@Injectable()
export class JeopardyService {

private baseUrl: string = 'http://jservice.io/api/';

  constructor(private http: Http) { }

  getRecords(endpoint: string): Observable<any[]> {
>>>>>>> 72d346287a849cf5dc512a9251ed1bed533140aa
        let apiUrl = this.baseUrl + "random";
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
<<<<<<< HEAD
            
    }

   private extractData(res: Response) {
=======
  }

    private extractData(res: Response) {
>>>>>>> 72d346287a849cf5dc512a9251ed1bed533140aa
    let results = res.json();
    return results || [];
  }

<<<<<<< HEAD
 private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if(typeof error._body === "string"){
            errMsg = error._body
        }else{
            if (error instanceof Response) {
                if(error.status === 0){
                    errMsg = "Error connecting to API"
                }else{
                    const errorJSON = error.json();
                    errMsg = errorJSON.message;
                } 
            }
=======
  private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            if(error.status === 0){
                errMsg = "Error connecting to API"
            }else{
                const errorJSON = error.json();
                errMsg = `${errorJSON.code} - ${errorJSON.message}`;
            } 
>>>>>>> 72d346287a849cf5dc512a9251ed1bed533140aa
        }
        
        return Observable.throw(errMsg);
    }

<<<<<<< HEAD

}
=======
}


>>>>>>> 72d346287a849cf5dc512a9251ed1bed533140aa
