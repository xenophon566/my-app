import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

/**
 * ## 自訂預先載入機制
 *
 * @export
 * @class SelectedPreloadingService
 * @implements {PreloadingStrategy}
 */
@Injectable({
    providedIn: 'root',
})
export class SelectedPreloadingService implements PreloadingStrategy {
    preloadedModules: string[] = [];

    // route.data.preload 為 true 的模組執行預先載入
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload']) return load();
        else return of(null);
    }
}
