import { Component, Input, OnChanges } from '@angular/core';
import * as D3 from 'd3';
import { ImmutableObject } from '../utils/immutable-object';
export type Datum = {name: string, value: number};
@Component({
  selector: 'app-d3-bar-chart',
  templateUrl: './d3-bar-chart.component.html',
  styleUrls: ['./d3-bar-chart.component.css']
})
export class D3BarChartComponent implements OnChanges {
  
  @Input() height = 300;
  @Input() width = 600;
  @Input() data: Datum[] = [];
  @Input() range = 100;
  @Input() paddingLeft = 30;
  @Input() paddingBottom = 20;

  xScale: D3.ScaleBand<string> = null;
  yScale: D3.ScaleLinear<number, number> = null;
  transform = '';
  chartWidth = this.width - this.paddingLeft;
  chartHeight = this.height - this.paddingBottom;
  axisBottomTransform = '';
  axisLeftTransform = '';
  barWidth = 0;
  xCoordinates: number[] = [];
  
  changeDetector = new ImmutableObject({});
  constructor() { }
  ngDoCheck() {
    let newChange = this.changeDetector.assign({
      height: this.chartHeight,
      width: this.chartWidth,
      range: this.range,
      keys: this.getDistinctNames()
    });

    if (newChange !== this.changeDetector) {
      this.changeDetector = newChange;
      this.xScale = D3.scaleBand()
      .domain(this.data.map((item: Datum)=>item.name)).range([0, this.chartWidth])
      .paddingInner(0.5);
    this.yScale = D3.scaleLinear()
      .domain([0, this.range])
      .range([this.chartHeight, 0]);
    }
    this.barWidth = this.xScale.bandwidth();
    this.xCoordinates = this.data.map((item: Datum) => this.xScale(item.name));
  }

  getDistinctNames() {
    let previous = null;
    return this.data.map((item: Datum) => item.name).sort().filter((value: string) => {
      let areDifferent = (value !== previous);
      previous = value;
      return areDifferent;
    });
  }

  ngOnChanges() {
    this.chartWidth = this.width - this.paddingLeft;
    this.chartHeight = this.height - this.paddingBottom; 
    
  
    this.transform = `scale(1, -1) translate(${this.paddingLeft}, ${- this.chartHeight})`;
    this.axisBottomTransform = `translate(${this.paddingLeft}, ${this.chartHeight})`;
    this.axisLeftTransform = `translate(${this.paddingLeft}, 0)`;
  }
  trackByFunc(i: number, item: Datum) {
    return item.name;
  }
  clampHeight(value: number) {
    if (value < 0) {
      return 0;
    }

    if (this.chartHeight <= 0) {
      return 0
    }

    if (value > this.chartHeight) {
      return this.chartHeight;
    }

    return value;
  }

  barHeight(value) {
    return this.clampHeight(this.chartHeight - this.yScale(value));
  }

  barX(name: string) {
    return this.xScale(name);
  }

}
