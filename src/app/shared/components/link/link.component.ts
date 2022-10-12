import { Component, OnInit } from '@angular/core';
import { PublicityService } from '@core/state';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
    constructor(private publicityService: PublicityService) {}

    /**
     * ### 各元件內容寫入 Observable - publicityState
     *
     * @param {*} $event
     * @memberof LinkComponent
     */
    previewContent($event: any) {
        this.publicityService.setState($event.target.value);
    }

    ngOnInit(): void {}
}
