import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuService } from '@nebular/theme';

import { NbMenuItem } from '@nebular/theme';
import { NbMenuItems } from './home.menuitem';

// @ngx-translate
import { TranslateService } from '@ngx-translate/core';

// Language Service - 監聽語系改變或解析需要翻譯的目錄結構
import { LanguageService } from '@core/utils/language.service';

// 引入路由模組
import { Router } from '@angular/router';

/**
 * ## 首頁元件
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor(
        private sidebarService: NbSidebarService,
        private nbMenuService: NbMenuService,
        private translateService: TranslateService,
        private languageService: LanguageService,
        private router: Router
    ) {
        // 取得瀏覽器目前語系
        this.translateService.use(localStorage.getItem('lang') || navigator.language);

        // 將對應語系寫入語系菜單中
        this.translateService.get('HEADER.LANG').subscribe((resp) => this.getLang(resp));
    }

    /**
     * ### 側邊巢狀菜單
     *
     * @type {NbMenuItem[]}
     * @memberof HomeComponent
     */
    items: NbMenuItem[] = NbMenuItems;

    /**
     * ### 語系項目
     *
     * @memberof HomeComponent
     */
    languageMenu = [{ title: '', tag: '' }];

    userName = localStorage.getItem('account');

    openUserMenu = [{ title: '登出', tag: '/logout' }];

    /**
     * ### 可供切換的語系菜單的 i18n
     *
     * @param {*} data
     * @memberof HomeComponent
     */
    getLang(data: any) {
        this.languageMenu = [
            { title: data.TW, tag: 'zh-TW' },
            { title: data.US, tag: 'en-US' },
        ];
    }

    /**
     * ### 縮放側邊巢狀菜單
     *
     * @return {*}
     * @memberof HomeComponent
     */
    toggle() {
        this.sidebarService.toggle(true);
        return false;
    }

    /**
     * ### i18n 翻譯側邊巢狀菜單
     *
     * @param {*} data
     * @memberof HomeComponent
     */
    getNbMenuItems(data: any) {
        NbMenuItems.forEach((item: any) => {
            item.title = this.languageService.recursiveLangAppend(data, item);
        });
    }

    ngOnInit(): void {
        this.nbMenuService.onItemClick().subscribe((title: { item: any; tag: any }) => {
            // 監聽到有切換語系的動作且為合法語系則進入更換語言的方法
            if (title.item.tag === 'zh-TW' || title.item.tag === 'en-US') {
                this.languageService.setLang(title.item.tag);
                this.translateService.get('HEADER.LANG').subscribe((resp) => this.getLang(resp));
                this.translateService.get('MENU_ITEMS').subscribe((resp) => this.getNbMenuItems(resp));
            }

            if (title.item.tag === '/logout') {
                localStorage.removeItem('account');
                localStorage.removeItem('isLogin');

                // 登出後導到登入元件的畫面
                this.router.navigate(['auth/login']);
            }
        });
    }
}
