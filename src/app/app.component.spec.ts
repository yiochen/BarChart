import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { D3BarChartComponent } from './d3-bar-chart/d3-bar-chart.component';
import { D3AxisDirective } from './d3-axis.directive';
import { AutoResizeDirective } from './auto-resize.directive';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        D3BarChartComponent,
        D3AxisDirective,
        AutoResizeDirective
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
 
});
