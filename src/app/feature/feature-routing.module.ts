import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';

const FEATURE_ROUTES: Routes = [
    {
        path: 'hello',
        component: HelloComponent,
    },
    {
        path: 'world',
        component: WorldComponent,
    },
];

/**
 * ## 功能模組路由設定
 *
 * @export
 * @class FeatureRoutingModule
 */
@NgModule({
    imports: [RouterModule.forChild(FEATURE_ROUTES)],
    exports: [RouterModule],
})
export class FeatureRoutingModule {}
