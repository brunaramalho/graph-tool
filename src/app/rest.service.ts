import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map' 

@Injectable()
export class AppService {
    headers = new Headers();
    requestOptions = new RequestOptions();

    constructor(private http: Http) {}

    postDynamic(n) {
        var h1 = new Headers();
        h1.append('Content-Type', 'application/json');
                    
        var requestOptions = new RequestOptions();
        requestOptions.headers = h1;
            
        var Url="http://localhost:3000/dynamic"

        return this.http.post(Url, JSON.stringify({"args": n}), requestOptions)
                .map((response: Response) => response.json())
    }

    postStatic(n) {
        var h1 = new Headers();
        h1.append('Content-Type', 'application/json');
                    
        var requestOptions = new RequestOptions();
        requestOptions.headers = h1;
            
        var Url="http://localhost:3000/static"

        return this.http.post(Url, JSON.stringify({"args": n}), requestOptions)
                .map((response: Response) => response.json())
    }

    postBlock(data) {
        var h1 = new Headers();
        h1.append('Content-Type', 'application/json');
                    
        var requestOptions = new RequestOptions();
        requestOptions.headers = h1;
            
        var Url="http://localhost:3000/block"

        return this.http.post(Url, JSON.stringify({"args": data}), requestOptions)
            .map((response: Response) => response.json())
    }

    postChordal(data) {
        var h1 = new Headers();
        h1.append('Content-Type', 'application/json');
                    
        var requestOptions = new RequestOptions();
        requestOptions.headers = h1;
            
        var Url="http://localhost:3000/chordal"

        return this.http.post(Url, JSON.stringify({"args": data}), requestOptions)
            .map((response: Response) => response.json())
    }
}

 