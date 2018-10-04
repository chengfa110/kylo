import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { UIRouterModule } from "@uirouter/angular";
import * as angular from "angular";


import { CommonModule } from '@angular/common';  
import {TranslateModule} from "@ngx-translate/core";
import {FlexLayoutModule} from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';

import {KyloServicesModule} from "../../../services/services.module";
import {KyloCommonModule} from "../../../common/common.module";

import { NvD3Module } from 'ng2-nvd3';
import { FeedStatsService } from "./FeedStatsService";
import { feedStatsStates } from "./feed-stats.states";
import { FeedStatsComponent } from "./feed-stats.component";

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { OpsManagerServicesModule } from "../../services/ops-mgr.services.module";
import { FeedStasChartsComponent } from "./feed-stats-charts.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


@NgModule({
    declarations: [
        FeedStatsComponent,
        FeedStasChartsComponent
    ],
    entryComponents: [
        FeedStatsComponent,
        FeedStasChartsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        KyloServicesModule,
        KyloCommonModule,
        OpsManagerServicesModule,
        FlexLayoutModule,
        TranslateModule,
        NvD3Module,
        MatSlideToggleModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatCardModule,
        MatButtonModule,
        MatSliderModule,
        MatToolbarModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatDividerModule,
        MatListModule,
        UIRouterModule.forChild({states: feedStatsStates})
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers : [{provide: "$injector", useFactory: () => angular.element(document.body).injector()},FeedStatsService]
})
export class FeedStatsModule {
    constructor() {
    }
}