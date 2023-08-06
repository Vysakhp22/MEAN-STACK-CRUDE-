import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Employee } from '../shared/employee.model'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    private baseUrl = 'http://localhost:3000/employees';


    constructor(
        private http: HttpClient
    ) { }

    public postAsync(payload: any): Observable<any> {
        return this.http.post(this.baseUrl, payload);
    }
    public getAsync(): Observable<any> {
        return this.http.get(this.baseUrl);
    }
    public getByIdAsync(params: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/${params}`);
    }
    public putAsync(params: string, payload: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/${params}`, payload);
    }
    public deleteAsync(params: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${params}`);
    }
}