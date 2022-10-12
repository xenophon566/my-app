import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { TextComponent, LinkComponent, HtmlComponent } from '@shared/components';
import { PublicityService } from '@core/state';
import { PublicityLoaderDirective } from '@shared/directives/publicity-loader.directive';

/**
 * ## 廣告元件
 *
 * @export
 * @class PublicityComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-publicity',
    templateUrl: './publicity.component.html',
    styleUrls: ['./publicity.component.scss'],
})
export class PublicityComponent implements OnInit {
    constructor(
        private publicityService: PublicityService,
        private publicityFactoryResolver: ComponentFactoryResolver
    ) {}

    editorType = 'text';

    publicityState: any = null;

    showResult = false;

    editorContent = '';

    @ViewChild(PublicityLoaderDirective, { static: true }) appPublicityLoader: PublicityLoaderDirective;

    /**
     * ### 動態生成元件畫面
     *
     * @param {string} [type='']
     * @return {*}
     * @memberof PublicityComponent
     */
    loadComponent(type = '') {
        if (!type) return;

        const componentList: any = {
            text: TextComponent,
            link: LinkComponent,
            html: HtmlComponent,
        };

        const componentFactory = this.publicityFactoryResolver.resolveComponentFactory(componentList[type]);
        const viewContainerRef = this.appPublicityLoader.viewContainerRef;
        viewContainerRef.clear();

        // 動態建立元件
        viewContainerRef.createComponent(componentFactory);
    }

    /**
     * ### 改變編輯的廣告格式
     *
     * @param {string} [type='text']
     * @memberof PublicityComponent
     */
    editorTypeChange(type = 'text') {
        this.showResult = false;

        this.editorType = type;
        this.loadComponent(type);
    }

    /**
     * ### 結果預覽器
     *
     * @memberof PublicityComponent
     */
    previewEditor() {
        this.showResult = true;
    }

    ngOnInit(): void {
        this.publicityState = this.publicityService.publicityState$.subscribe((resp) => {
            this.editorContent = resp;
        });

        // 先載入文字廣告格式元件
        this.loadComponent('text');
    }

    ngOnDestroy(): void {
        this.publicityState = null;
    }
}
