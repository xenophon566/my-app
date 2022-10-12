import { Component, OnInit } from '@angular/core';
import { LandRecordService } from '@core/state';

@Component({
    selector: 'app-land-record',
    templateUrl: './land-record.component.html',
    styleUrls: ['./land-record.component.scss'],
})
export class LandRecordComponent implements OnInit {
    constructor(private landRecordService: LandRecordService) {}

    // landRecord$
    landRecordRxjs: any = null;

    // 總筆數
    landRecords = 10000;

    ngOnInit(): void {
        // 訂閱 landRecord$
        this.landRecordRxjs = this.landRecordService.landRecord$.subscribe((resp) => {
            // 更新總筆數
            this.landRecords = resp;
        });
    }

    ngOnDestroy(): void {
        // 取消訂閱 landRecord$
        if (!!this.landRecordRxjs) this.landRecordRxjs.unsubscribe();
    }
}
