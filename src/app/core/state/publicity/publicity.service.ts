import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PublicityService {
    constructor() {}

    /**
     * ### Rxjs publicityState
     *
     * @memberof PublicityService
     */
    public publicityState = new Subject<any>();
    publicityState$ = this.publicityState.asObservable();

    /**
     * ### 設定廣告內容
     *
     * @param {*} value
     * @memberof PublicityService
     */
    setState(value: any): void {
        this.publicityState.next(value);
    }
}
