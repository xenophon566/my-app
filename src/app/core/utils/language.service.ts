import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

/**
 * ### Language Service - 監聽語系改變或解析需要翻譯的目錄結構服務
 *
 * @export
 * @class LanguageService
 */
@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    /**
     * @ignore
     */
    constructor(private translateService: TranslateService) {}

    /**
     * ### ReplaySubject - language$
     *
     * @memberof LanguageService
     */
    language$ = new ReplaySubject<LangChangeEvent>(1);

    /**
     * ### langService
     *
     * @type {*}
     * @memberof LanguageService
     */
    langService: any = null;

    /**
     * set i18n language
     *
     * @param {string} [language='']
     * @memberof LanguageService
     */
    setLang(language: string = '') {
        let lang = language || localStorage.getItem('lang') || navigator.language;
        localStorage.setItem('lang', lang);

        // 觸發 Rxjs
        this.setLangRxjs(lang);
    }

    /**
     * set language RxJS
     *
     * @param {string} [lang='']
     * @memberof LanguageService
     */
    setLangRxjs(lang: string = '') {
        this.langService = this.translateService.onLangChange.pipe(take(1)).subscribe((result) => {
            this.language$.next(result);
        });

        // 改變使用的語系
        this.translateService.use(lang);
    }

    /**
     * ### 解析巢狀結構目錄
     *
     * i18n recursive of menu structure
     *
     * @param {object} langData
     * @param {object} item
     * @return {string} item.title
     * @memberof LanguageService
     */
    recursiveLangAppend(langData: any, item: any) {
        if (!langData || !item) return '';

        if (!!item.children) {
            item.children.forEach((element: any) => {
                return this.recursiveLangAppend(langData, element);
            });
        }

        if (item.key.split('.').length > 1) {
            let childTitleObj: any = {};
            let childTitle = '';
            item.key.split('.').forEach((val: any) => {
                if (!!Object.keys(childTitleObj).length) {
                    childTitle = childTitleObj[val];
                    childTitleObj = childTitleObj[val];
                } else childTitleObj = langData[val];
            });
            item.title = childTitle;
        } else item.title = langData[item.key];

        return item.title;
    }
}
