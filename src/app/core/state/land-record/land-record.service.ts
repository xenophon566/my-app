import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LandRecordService {
    constructor() {}

    // 提供訂閱服務 - landRecord
    public landRecord = new BehaviorSubject<any>('');
    landRecord$ = this.landRecord.asObservable();

    // 寫入 landRecord$
    setLandRecord(value: any): void {
        this.landRecord.next(value);
    }
}
