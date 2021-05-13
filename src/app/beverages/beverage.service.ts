import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class BeverageService {

    private apiUrl: string;

    constructor(
        private http: Http
    ) {
        this.apiUrl = environment.apiUrl;
    }

    async getBeverages(): Promise<Array<Object>> {
        return this.http.get(`${this.apiUrl}/beverage`)
        .toPromise()
        .then((resp) => {
            return resp.json();
        });
    }

    async getBeverageById(beverageId): Promise<Object> {
        return this.http.get(`${this.apiUrl}/beverage/id/${beverageId}`)
        .toPromise()
        .then((resp) => {
            return resp.json();
        });
    }

    async addBeverage(beverage): Promise<Object> {
        return this.http.post(`${this.apiUrl}/beverage`, beverage)
        .toPromise()
        .then((resp) => {
            return resp.json();
        });
    }

    async deleteBeverage(id): Promise<Object> {
        return this.http.delete(`${this.apiUrl}/beverage/id/${id}`)
        .toPromise()
        .then((resp) => {
            return resp.json();
        });
    }

    async updateBeverage(id, beverage): Promise<Object> {
        return this.http.put(`${this.apiUrl}/beverage/id/${id}`, beverage)
        .toPromise()
        .then((resp) => {
            return resp.json();
        });
}
    }


