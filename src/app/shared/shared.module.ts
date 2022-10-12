import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './shared.define';
import { NEBULAR_ALL } from '@define/nebular/nebular.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, ...NEBULAR_ALL],
    exports: [...COMPONENTS],
})
export class SharedModule {}
