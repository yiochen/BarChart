import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { D3BarChartComponent } from './d3-bar-chart/d3-bar-chart.component';
import { D3AxisDirective } from './d3-axis.directive';
import { AutoResizeDirective } from './auto-resize.directive';
import { TweenPipe } from './tween.pipe';

@NgModule({
  declarations: [
    AppComponent,
    D3BarChartComponent,
    D3AxisDirective,
    AutoResizeDirective,
    TweenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
