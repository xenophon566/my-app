import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-input-data',
    templateUrl: './input-data.component.html',
    styleUrls: ['./input-data.component.scss'],
})
export class InputDataComponent implements OnInit {
    constructor() {}

    item = '';

    /**
     * ### 從父元件傳來的資料
     *
     * @type {*}
     * @memberof InputDataComponent
     */
    @Input() data: any;

    /**
     * ### 傳回父元件的事件
     *
     * @memberof InputDataComponent
     */
    @Output() newItemEvent = new EventEmitter<string>();

    /**
     * ### 加入地號
     *
     * @param {string} type
     * @memberof InputDataComponent
     */
    create(type: string) {
        this.newItemEvent.emit(
            JSON.stringify({
                type,
                item: this.item,
            })
        );
    }

    /**
     * ### 刪除輸入的地號
     *
     * @param {string} type
     * @memberof InputDataComponent
     */
    delete(type: string) {
        this.newItemEvent.emit(
            JSON.stringify({
                type,
                item: this.item,
            })
        );
    }

    ngOnInit(): void {}
}
