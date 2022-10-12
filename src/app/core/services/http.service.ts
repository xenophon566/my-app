import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * interface of API Response
 *
 * @export
 * @interface IHttpResponse
 */
export interface IHttpResponse {
    data?: object | [];
}

/**
 * Http Service
 *
 * @export
 * @class HttpService
 */
@Injectable({
    providedIn: 'root',
})
export class HttpService {
    /**
     * @ignore
     */
    constructor(private httpClient: HttpClient) {}

    /**
     * ### httpGET 獲取租戶列表
     * > HttpClient Member - Http GET
     * >
     * > Observable to Promise(for Async/Await)
     *
     * @param {*} args[] - (1. url)
     * @returns {Promise<object>}
     * @memberof HttpService
     */
    async httpGET(...args: any[]): Promise<object> {
        const apiUrl = args[0] || '';

        try {
            const result$ = this.httpClient.get(apiUrl).pipe(
                tap((resp: IHttpResponse) => {
                    return resp;
                })
            );

            return await lastValueFrom(result$);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    /**
     * ### httpPOST 新增租戶
     * * > HttpClient Member - Http POST
     * >
     * > Observable to Promise(for Async/Await)
     *
     * @param {...any[]} args - (1. url, 2. body)
     * @return {*}  {Promise<object>}
     * @memberof HttpService
     */
    async httpPOST(...args: any[]): Promise<object> {
        const apiUrl = args[0] || '';
        const body = args[1] || {};

        try {
            const result$ = this.httpClient.post(apiUrl, body).pipe(
                tap((resp: IHttpResponse) => {
                    return resp;
                })
            );

            return await lastValueFrom(result$);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async httpPUT(...args: any[]): Promise<object> {
        const apiUrl = args[0] || '';
        const body = args[1] || {};

        try {
            const result$ = this.httpClient.put(apiUrl, body).pipe(
                tap((resp: IHttpResponse) => {
                    return resp;
                })
            );

            return await lastValueFrom(result$);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async httpDelete(...args: any[]): Promise<object> {
        const apiUrl = args[0] || '';

        try {
            const result$ = this.httpClient.delete(apiUrl);

            return await lastValueFrom(result$);
        } catch (err) {
            return Promise.reject(err);
        }
    }
}
