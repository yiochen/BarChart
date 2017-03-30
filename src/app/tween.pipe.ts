import { Pipe, PipeTransform } from '@angular/core';
import { ImmutableObject } from './utils/immutable-object';
import * as D3 from 'd3';

@Pipe({
  name: 'tween',
  pure: false
})
export class TweenPipe implements PipeTransform {

  cached: ImmutableObject = new ImmutableObject(null);
  currentValue: any;
  timer: D3.Timer;

  ease = D3.easeCubic;

  transform(value: any, time = 750): any {
    let newValue = this.cached.assign(value);
    if (newValue !== this.cached) {
      let interpolator = D3.interpolate(this.cached.get(), newValue.get());
      this.cached = newValue;
      this.stop();
      this.timer = D3.timer((elapsed: number) => {
        if (elapsed < time) {
          this.currentValue = interpolator(this.ease(elapsed / time));
        } else {
          this.currentValue = interpolator(1);
          this.stop();
        }
      });

      this.currentValue = interpolator(0);
    }

    return this.currentValue;
  }

  stop() {
    if (this.timer) {
      this.timer.stop();
      this.timer = null;
    }
  }

}
