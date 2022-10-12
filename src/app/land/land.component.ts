import { Component, OnInit } from '@angular/core';
import { LandRecordService } from '@core/state';

@Component({
    selector: 'app-land',
    templateUrl: './land.component.html',
    styleUrls: ['./land.component.scss'],
})
export class LandComponent implements OnInit {
    constructor(private landRecordService: LandRecordService) {}

    items = ['Default : 大同區0001-0000地號'];

    /**
     * ### 父元件接收來自子元件的操作
     *
     * - type: add 加入
     * - type: remove 刪除
     *
     * @param {string} $event
     * @memberof LandComponent
     */
    actionFromChild($event: string) {
        const doFromChildObj = JSON.parse($event);
        if (doFromChildObj.type === 'add') this.items.push(doFromChildObj.item);
        else {
            const idx = this.items.indexOf(doFromChildObj.item);
            if (!!~idx) this.items.splice(idx, 1);
        }

        // 狀態寫入 landRecord$
        this.landRecordService.setLandRecord(this.items.length);
    }

    ngOnInit(): void {
        // 狀態寫入 landRecord$
        this.landRecordService.setLandRecord(this.items.length);
    }
}
