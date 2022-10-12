import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Shared
import { SharedModule } from '@shared/shared.module';

// Nebular
import { NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NEBULAR_ROOT, NEBULAR_ALL } from '@define/nebular/nebular.module';

// Ngx-Echart
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

// Ngx-Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Core Module
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Home Components
import { HomeComponent } from './home/home.component';
import { TenantComponent } from './tenant/tenant.component';
import { AboutComponent } from './about/about.component';
import { LandComponent } from './land/land.component';
import { PublicityComponent } from './publicity/publicity.component';

// Sibling Component
import { LandRecordComponent } from './land-record/land-record.component';

// Ngx-Translate
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TenantComponent,
        AboutComponent,
        LandComponent,
        LandRecordComponent,
        PublicityComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NbThemeModule.forRoot({ name: 'default' }),
        NbEvaIconsModule,
        NgxEchartsModule.forRoot({
            echarts,
        }),
        // Ngx-Translate
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }),
        ...NEBULAR_ROOT,
        ...NEBULAR_ALL,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
