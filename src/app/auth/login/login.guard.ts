import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class LoginGuard implements CanActivate {
    /**
     * @ignore
     */
    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // 檢查是否已經登入 (已登入：true / 未登入：false)
        if (!localStorage.getItem('isLogin')) {
            // 還沒登入就導回登入頁面
            alert('您還沒有登入喔!!!');
            this.router.navigate(['/auth/login']);
            return false;
        } else return true;
    }
}
