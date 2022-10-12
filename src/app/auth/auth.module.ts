import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NEBULAR_ALL } from '@define/nebular/nebular.module';

// 引入登入模組路由設定
import { AuthRoutingModule } from './auth-routing.module';

/**
 * ## 登入模組
 *
 * @export
 * @class AuthModule
 */
@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, AuthRoutingModule, ...NEBULAR_ALL],
})
export class AuthModule {}
