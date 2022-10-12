import { Directive, ViewContainerRef } from '@angular/core';

/**
 * ## 廣告格式元件載入器
 *
 * @export
 * @class PublicityLoaderDirective
 */
@Directive({
    selector: '[appPublicityLoader]',
})
export class PublicityLoaderDirective {
    /**
     * @ignore
     */
    constructor(public viewContainerRef: ViewContainerRef) {}
}
