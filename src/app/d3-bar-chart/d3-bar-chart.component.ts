import { Component, Input, OnChanges } from '@angular/core';
import * as D3 from 'd3';
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

  ngOnChanges() {
    this.chartWidth = this.width - this.paddingLeft;
    this.chartHeight = this.height - this.paddingBottom; 
    this.xScale = D3.scaleBand()
      .domain(this.data.map((item: Datum)=>item.name)).range([0, this.chartWidth])
      .paddingInner(0.5);
    this.yScale = D3.scaleLinear()
      .domain([0, this.range])
      .range([this.chartHeight, 0]);
    this.transform = `scale(1, -1) translate(${this.paddingLeft}, -${this.chartHeight})`;
    this.axisBottomTransform = `translate(${this.paddingLeft}, ${this.chartHeight})`;
    this.axisLeftTransform = `translate(${this.paddingLeft}, 0)`;
  }

}
