import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { NEBULAR_ALL } from '@define/nebular/nebular.module';

// 引入功能模組路由設定
import { FeatureRoutingModule } from './feature-routing.module';

/**
 * ## 功能模組
 *
 * @export
 * @class FeatureModule
 */
@NgModule({
    declarations: [HelloComponent, WorldComponent],
    imports: [CommonModule, FeatureRoutingModule, ...NEBULAR_ALL],
})
export class FeatureModule {}
