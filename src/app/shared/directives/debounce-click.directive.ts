import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
    selector: '[appDebounceClick]',
})
export class DebounceClickDirective {
    constructor() {}

    /**
     * ### debounceTime - 預設延遲時間
     *
     * @memberof DebounceClickDirective
     */
    @Input() debounceTime = 1e3;

    /**
     * ### debounceClick - 點擊事件
     *
     * @memberof DebounceClickDirective
     */
    @Output() debounceClick = new EventEmitter();

    /**
     * ### Clicks Subject - 點擊事件觀察者
     *
     * @private
     * @memberof DebounceClickDirective
     */
    private clicks = new Subject();

    /**
     * subscription - 訂閱點擊事件
     *
     * @private
     * @type {Subscription}
     * @memberof DebounceClickDirective
     */
    private subscription: Subscription;

    /**
     * HostListener clickEvent - 監聽頁面點擊事件
     *
     * @param {*} $event
     * @memberof DebounceClickDirective
     */
    @HostListener('click', ['$event'])
    clickEvent($event: any) {
        $event.preventDefault();
        $event.stopPropagation();
        this.clicks.next($event);

        document.body.click();
    }

    ngOnInit() {
        this.subscription = this.clicks
            .pipe(debounceTime(this.debounceTime))
            .subscribe((e) => this.debounceClick.emit(e));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
