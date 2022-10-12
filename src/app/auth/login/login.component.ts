import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NbToastrService, NbThemeService } from '@nebular/theme';
import { Router } from '@angular/router';

// services
import { HttpService } from '@core/services/http.service';

/**
 * Component for Login
 *
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(
        private location: Location,
        private router: Router,
        private nbThemeService: NbThemeService,
        public nbToastrService: NbToastrService,
        private httpService: HttpService
    ) {}

    host = 'http://localhost:3000';

    loadingSpiner = false;

    selectedTheme = !!localStorage.getItem('theme') ? localStorage.getItem('theme') || '' : 'default';

    /**
     * ### 顯示錯誤訊息
     *
     * @param {string} subtitle
     * @param {string} title
     * @param {*} position
     * @param {string} status
     * @memberof LoginComponent
     */
    showToast(subtitle: string, title: string, position: any, status: string): void {
        this.nbToastrService.show(subtitle, title, { position, status });
    }

    /**
     * ### 元件的登入功能
     *
     * @param {string} uname
     * @param {string} pword
     * @memberof LoginComponent
     */
    async goLogin(uname: string, pword: string): Promise<void> {
        this.loadingSpiner = true;
        let flag = false;

        const resp: any = await this.httpService.httpGET(this.host + '/myapp-user-list');
        for (let user of resp) {
            if (user.account === uname && user.password === pword) {
                flag = true;
                localStorage.setItem('account', user.account);
            }
        }

        if (flag) {
            localStorage.setItem('isLogin', 'true');
            this.location.replaceState('/');
            this.router.navigate(['/home/about']);
        } else this.showToast('系統資訊', '登入失敗', 'top-right', 'danger');

        this.loadingSpiner = false;
    }

    ngOnInit(): void {
        localStorage.removeItem('isLogin');
    }
}
