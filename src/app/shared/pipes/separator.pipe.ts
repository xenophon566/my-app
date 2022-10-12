import { Pipe, PipeTransform } from '@angular/core';

/**
 * ## 共用管道 - separator
 *
 * @export
 * @class SeparatorPipe
 * @implements {PipeTransform}
 */
@Pipe({
    name: 'separator',
})
export class SeparatorPipe implements PipeTransform {
    // 只要超過 3 個字串，也就是 1000 的時候，就會自行在千位數後面加上逗號
    transform(value: number | string): string {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}
