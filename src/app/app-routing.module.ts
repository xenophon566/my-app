import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// 引入自訂預先載入機制
import { SelectedPreloadingService } from '@core/services/selected-preloading.service';

// 引入登入模組的路由守衛
import { LoginGuard } from './auth/login/login.guard';

// Home Components
import { HomeComponent } from './home/home.component';
import { TenantComponent } from './tenant/tenant.component';
import { AboutComponent } from './about/about.component';
import { LandComponent } from './land/land.component';
import { PublicityComponent } from './publicity/publicity.component';

// 路由設定
const routes: Routes = [
    // 延遲載入登入模組
    {
        path: 'auth',
        data: { preload: false }, // 設定為 false 時會啟動延遲載入機制
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'home', // 首頁元件路由
        component: HomeComponent,
        canActivate: [LoginGuard], // 在首頁元件使用路由守衛
        children: [
            {
                path: 'tenant', // 首頁元件的子路由 - home/tenant
                component: TenantComponent,
            },
            {
                path: 'about', // 首頁元件的子路由 - home/about
                component: AboutComponent,
            },
            {
                path: 'land', // 首頁元件的子路由 - home/land
                component: LandComponent,
            },
            {
                path: 'publicity', // 首頁元件的子路由 - home/publicity
                component: PublicityComponent,
            },
            // 預先載入功能模組
            {
                path: 'feature',
                data: { preload: true }, // 設定為 true 時會啟動預先載入機制
                loadChildren: () => import('./feature/feature.module').then((m) => m.FeatureModule),
            },
        ],
    },
    // 沒有路由路徑時自動導轉 home/about
    { path: '', redirectTo: 'home/about', pathMatch: 'full' },

    // 對應不到路由路徑時自動導轉 home/about
    { path: '**', redirectTo: 'home/about' },
];

/**
 * ## 根模組路由設定
 *
 * @export
 * @class AppRoutingModule
 */
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: SelectedPreloadingService, // 使用自訂預先載入機制
        }),
    ],
    providers: [SelectedPreloadingService], // 引入自訂預先載入機制
    exports: [RouterModule],
})
export class AppRoutingModule {}
