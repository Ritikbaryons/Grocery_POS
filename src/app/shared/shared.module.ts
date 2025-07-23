import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe, DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NotifierModule } from "angular-notifier";
import { Config } from "src/app/core/configs/config";
import {
  AppInnerHeaderComponent,
  AppFooterComponent,
  AppNavComponent,
} from "./components/";
import { AngularSvgIconModule } from "angular-svg-icon";

@NgModule({
  declarations: [
    AppInnerHeaderComponent,
    AppFooterComponent,
    AppNavComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    NotifierModule.withConfig(Config.customNotifierOptions),
    AngularSvgIconModule.forRoot(),
  ],
  exports: [
    AppInnerHeaderComponent,
    AppFooterComponent,
    AppNavComponent,
    NotifierModule,
  ],
  entryComponents: [],
  providers: [DatePipe, CurrencyPipe],
})
export class SharedModule { }
