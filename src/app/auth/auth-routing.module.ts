import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const AUTH_ROUTES: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
];

/**
 * ## 登入模組路由設定
 *
 * @export
 * @class AuthRoutingModule
 */
@NgModule({
    imports: [RouterModule.forChild(AUTH_ROUTES)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
