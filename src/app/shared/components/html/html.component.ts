import { Component, OnInit } from '@angular/core';
import { PublicityService } from '@core/state';

@Component({
    selector: 'app-html',
    templateUrl: './html.component.html',
    styleUrls: ['./html.component.scss'],
})
export class HtmlComponent implements OnInit {
    constructor(private publicityService: PublicityService) {}

    /**
     * ### 各元件內容寫入 Observable - publicityState
     *
     * @param {*} $event
     * @memberof HtmlComponent
     */
    previewContent($event: any) {
        this.publicityService.setState($event.target.value);
    }

    ngOnInit(): void {}
}
