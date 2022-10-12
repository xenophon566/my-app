import { Component, OnInit } from '@angular/core';
import { PublicityService } from '@core/state';

@Component({
    selector: 'app-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
    constructor(private publicityService: PublicityService) {}

    /**
     * ### 各元件內容寫入 Observable - publicityState
     *
     * @param {*} $event
     * @memberof TextComponent
     */
    previewContent($event: any) {
        this.publicityService.setState($event.target.value);
    }

    ngOnInit(): void {}
}
